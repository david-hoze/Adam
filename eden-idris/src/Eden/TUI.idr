||| EDEN TUI application.
|||
||| Two-column layout with dialogue tape, active set, feedback,
||| and graph telemetry. Renders via cell-buffer compositor (zero flicker).
module Eden.TUI

import Data.IORef
import Data.List
import Data.String
import Eden.Types
import Eden.Config
import Eden.Regard
import Eden.Retrieval
import Eden.Budget -- for natDiv
import Eden.Inference
import Eden.Membrane
import Eden.Hum
import Eden.Models.Base
import Eden.Models.Mock
import Eden.Storage
import Eden.Store.InMemory
import Eden.Runtime
import Eden.Indexer
import Eden.Trace
import Eden.SemanticRelations
import Eden.OntologyProjection
import Eden.Monad
import Eden.Pipeline
import Eden.Term
import Eden.TermIO

------------------------------------------------------------------------
-- Palette (RGB values)
------------------------------------------------------------------------

colAmber : RGB
colAmber = MkRGB 255 217 138

colText : RGB
colText = MkRGB 255 241 210

colMuted : RGB
colMuted = MkRGB 230 171 90

colBg : RGB
colBg = MkRGB 18 8 10

colPanel : RGB
colPanel = MkRGB 33 16 20

colNeon : RGB
colNeon = MkRGB 132 255 208

colIce : RGB
colIce = MkRGB 141 220 255

colRose : RGB
colRose = MkRGB 255 122 215

colEmber : RGB
colEmber = MkRGB 255 174 87

colViolet : RGB
colViolet = MkRGB 168 144 255

------------------------------------------------------------------------
-- UI State
------------------------------------------------------------------------

public export
record UIState where
  constructor MkUIState
  uiEnv        : EdenEnv
  uiTurnIdx    : IORef Nat
  uiComposer   : IORef String
  uiDialogue   : IORef (List (String, String))
  uiFeedback   : IORef (Maybe String)
  uiLastActive : IORef (List CandidateScore)
  uiLastHum    : IORef (Maybe HumPayload)
  uiLastBudget : IORef (Maybe BudgetEstimate)
  uiLastProj   : IORef (List MemeProjection)
  uiFocusPanel : IORef Nat
  uiScrollOff  : IORef Nat
  uiQuit       : IORef Bool
  uiWidth      : IORef Int
  uiHeight     : IORef Int

------------------------------------------------------------------------
-- Cell-buffer rendering helpers
------------------------------------------------------------------------

||| Write a plain string, truncating to maxW characters.
putText : Int -> Int -> RGB -> RGB -> Bool -> Int -> String -> IO ()
putText row col fg bg bd maxW s = go col (unpack s)
  where
    go : Int -> List Char -> IO ()
    go c [] = pure ()
    go c (x :: xs) =
      if c >= col + maxW
        then pure ()
        else do screenSet row c x fg bg bd
                go (c + 1) xs

||| Fill a row from col to col+w with spaces.
clearRow : Int -> Int -> Int -> RGB -> IO ()
clearRow row col w bg = screenFill row col w ' ' colText bg

||| Draw a full-width horizontal line.
hBar : Int -> Int -> RGB -> RGB -> IO ()
hBar row w fg bg = do
  let chars = replicate (cast w) '-'
  putText row 0 fg bg False w (pack chars)

------------------------------------------------------------------------
-- Panel renderers (write directly to cell buffer)
------------------------------------------------------------------------

||| Top status bar.
drawTopBar : UIState -> Int -> IO ()
drawTopBar ui w = do
  idx <- readIORef ui.uiTurnIdx
  counts <- runEden ui.uiEnv eGraphCounts
  clearRow 0 0 w colPanel
  putText 0 1 colAmber colPanel False (w - 1) " EDEN/Adam"
  putText 0 13 colMuted colPanel False (w - 13) ("T" ++ show idx)
  let statsCol = 18
  putText 0 statsCol colIce colPanel False (w - statsCol)
    ("memes=" ++ show counts.memeCount ++ " memodes=" ++ show counts.memodeCount
     ++ " edges=" ++ show counts.edgeCount)

||| Separator line.
drawSep : Int -> Int -> IO ()
drawSep row w = hBar row w colMuted colBg

||| Dialogue tape (left column).
drawDialogue : UIState -> Int -> Int -> Int -> IO ()
drawDialogue ui startRow leftW bodyH = do
  entries <- readIORef ui.uiDialogue
  let pairs = take (cast (natDiv (cast bodyH) 2)) (reverse entries)
  drawPairs startRow 0 pairs
  where
    drawPairs : Int -> Nat -> List (String, String) -> IO ()
    drawPairs row idx [] = pure ()
    drawPairs row idx ((user, adam) :: rest) = do
      if row >= startRow + bodyH
        then pure ()
        else do
          -- User line
          clearRow row 0 leftW colBg
          let tag = "[you T" ++ show idx ++ "] "
          putText row 1 colAmber colBg True (leftW - 1) tag
          let tagLen = cast (length tag) + 1
          putText row tagLen colText colBg False (leftW - tagLen) user
          -- Adam line
          if row + 1 < startRow + bodyH
            then do
              clearRow (row + 1) 0 leftW colBg
              let atag = "[adam T" ++ show idx ++ "] "
              putText (row + 1) 1 colRose colBg False (leftW - 1) atag
              let atagLen = cast (length atag) + 1
              putText (row + 1) atagLen colText colBg False (leftW - atagLen) adam
              drawPairs (row + 2) (idx + 1) rest
            else pure ()

||| Column divider.
drawDivider : Int -> Int -> Int -> IO ()
drawDivider col startRow bodyH = go startRow
  where
    go : Int -> IO ()
    go row = if row >= startRow + bodyH
               then pure ()
               else do screenSet row col '|' colMuted colBg False
                       go (row + 1)

||| Aperture panel (right column, top half).
drawAperture : UIState -> Int -> Int -> Int -> Int -> IO ()
drawAperture ui startRow col panelW panelH = do
  active <- readIORef ui.uiLastActive
  -- Header
  clearRow startRow col panelW colBg
  putText startRow (col + 1) colAmber colBg True (panelW - 1) "Aperture"
  let countStr = " (" ++ show (length active) ++ ")"
  putText startRow (col + 10) colMuted colBg False (panelW - 10) countStr
  -- Items
  drawItems (startRow + 1) (take (cast (panelH - 1)) active)
  where
    showD : Double -> String
    showD d = let i = cast {to=Integer} (d * 100.0)
              in show (cast {to=Double} i / 100.0)

    drawItems : Int -> List CandidateScore -> IO ()
    drawItems row [] = pure ()
    drawItems row (c :: cs) = do
      if row >= startRow + panelH
        then pure ()
        else do
          clearRow row col panelW colBg
          let domCol = case c.domain of Knowledge => colNeon; Behavior => colRose
          putText row (col + 1) colAmber colBg False 7 (showD c.selection)
          putText row (col + 9) domCol colBg False 20 c.label
          putText row (col + 30) colMuted colBg False (panelW - 30) ("reg=" ++ showD c.regard)
          drawItems (row + 1) cs

||| Hum/thinking panel (right column, bottom half).
drawThinking : UIState -> Int -> Int -> Int -> Int -> IO ()
drawThinking ui startRow col panelW panelH = do
  mhum <- readIORef ui.uiLastHum
  clearRow startRow col panelW colBg
  case mhum of
    Nothing => putText startRow (col + 1) colMuted colBg False (panelW - 1) "(no hum yet)"
    Just hum => do
      putText startRow (col + 1) colIce colBg True (panelW - 1) "Hum"
      let statusCol = col + 6
      putText startRow statusCol colMuted colBg False (panelW - 6) (show hum.hpStatus)
      -- Metrics
      if startRow + 1 < startRow + panelH
        then do
          clearRow (startRow + 1) col panelW colBg
          putText (startRow + 1) (col + 1) colMuted colBg False (panelW - 1)
            ("turns=" ++ show hum.metrics.turnsCovered ++ " motifs=" ++ show hum.metrics.recurringItems)
          -- Motifs
          drawMotifs (startRow + 2) (take 5 hum.tokenTable)
        else pure ()
  where
    drawMotifs : Int -> List HumTokenRow -> IO ()
    drawMotifs row [] = pure ()
    drawMotifs row (r :: rs) = do
      if row >= startRow + panelH
        then pure ()
        else do
          clearRow row col panelW colBg
          putText row (col + 1) colViolet colBg False 20 r.htToken
          putText row (col + 22) colMuted colBg False (panelW - 22) ("x" ++ show r.htFrequency)
          drawMotifs (row + 1) rs

||| Composer line.
drawComposer : UIState -> Int -> Int -> IO ()
drawComposer ui row w = do
  text <- readIORef ui.uiComposer
  clearRow row 0 w colBg
  putText row 0 colNeon colBg True 6 "[you] "
  if text == ""
    then putText row 6 colMuted colBg False (w - 6) "type a message..."
    else putText row 6 colText colBg False (w - 6) text

||| Status bar.
drawStatusBar : UIState -> Int -> Int -> IO ()
drawStatusBar ui row w = do
  fb <- readIORef ui.uiFeedback
  clearRow row 0 w colPanel
  case fb of
    Nothing => putText row 1 colMuted colPanel False (w - 1) "Esc=quit  Enter=send  F1=help"
    Just s  => putText row 1 colAmber colPanel False (w - 1) s

------------------------------------------------------------------------
-- Full frame render
------------------------------------------------------------------------

||| Render the complete TUI frame into the cell buffer, then present.
renderFrame : UIState -> IO ()
renderFrame ui = do
  ts <- getTermSize
  let w = cast {to=Int} ts.tsWidth
  let h = cast {to=Int} ts.tsHeight
  writeIORef ui.uiWidth w
  writeIORef ui.uiHeight h

  screenInit w h
  screenClear

  let bodyH = h - 5
  let leftW = (w * 60) `div` 100
  let divCol = leftW
  let rightCol = leftW + 1
  let rightW = w - rightCol

  -- Top bar (row 0)
  drawTopBar ui w
  -- Separator (row 1)
  drawSep 1 w
  -- Dialogue tape (rows 2 .. 2+bodyH-1, left column)
  drawDialogue ui 2 leftW bodyH
  -- Divider
  drawDivider divCol 2 bodyH
  -- Aperture (right column, top half of body)
  let apertH = bodyH `div` 2
  drawAperture ui 2 rightCol rightW apertH
  -- Thinking/Hum (right column, bottom half)
  let thinkStart = 2 + apertH
  let thinkH = bodyH - apertH
  drawThinking ui thinkStart rightCol rightW thinkH
  -- Separator (row 2+bodyH)
  drawSep (2 + bodyH) w
  -- Composer (row 3+bodyH)
  drawComposer ui (3 + bodyH) w
  -- Status bar (row 4+bodyH)
  drawStatusBar ui (4 + bodyH) w

  -- Diff and flush — only changed cells are written
  screenPresent

------------------------------------------------------------------------
-- Input handling
------------------------------------------------------------------------

parseVerdict : Char -> Maybe Verdict
parseVerdict 'a' = Just Accept
parseVerdict 'r' = Just Reject
parseVerdict 'e' = Just Edit
parseVerdict 's' = Just Skip
parseVerdict _   = Nothing

||| Handle a key event in the main loop.
handleKey : UIState -> KeyEvent -> IO ()
-- Quit
handleKey ui KeyF12 = writeIORef ui.uiQuit True
handleKey ui (KeyCtrl 'q') = writeIORef ui.uiQuit True
handleKey ui (KeyCtrl 'c') = writeIORef ui.uiQuit True
handleKey ui KeyEscape = writeIORef ui.uiQuit True
-- Send turn on Enter
handleKey ui KeyEnter = do
  text <- readIORef ui.uiComposer
  if text == ""
    then pure ()
    else do
      -- Execute turn
      idx <- readIORef ui.uiTurnIdx
      writeIORef ui.uiTurnIdx (idx + 1)
      writeIORef ui.uiFeedback (Just "generating...")
      renderFrame ui

      tr <- runEden ui.uiEnv (mExecuteTurn idx text)

      -- Update state
      entries <- readIORef ui.uiDialogue
      writeIORef ui.uiDialogue ((text, tr.mrResponse) :: entries)
      writeIORef ui.uiComposer ""

      -- Update active set
      activeSet <- runEden ui.uiEnv mRetrieve
      writeIORef ui.uiLastActive activeSet

      -- Update projections
      projs <- runEden ui.uiEnv mProject
      writeIORef ui.uiLastProj projs

      -- Prompt for feedback
      writeIORef ui.uiFeedback (Just "feedback? (a/r/e/s)")
      renderFrame ui

      -- Wait for feedback key
      fbKey <- readKey 10000  -- 10 second timeout
      case fbKey of
        KeyChar c => case parseVerdict c of
          Just v => do
            let turnId = MkId {a=TurnTag} ("turn-" ++ show (idx + 3))
            runEden ui.uiEnv (mProcessFeedback turnId v "")
            writeIORef ui.uiFeedback (Just ("recorded: " ++ show v))
            -- Refresh hum
            hum <- runEden ui.uiEnv mBuildHum
            writeIORef ui.uiLastHum (Just hum)
          Nothing => writeIORef ui.uiFeedback (Just "skipped")
        _ => writeIORef ui.uiFeedback (Just "skipped")
-- Backspace
handleKey ui KeyBackspace = do
  text <- readIORef ui.uiComposer
  case strM text of
    StrNil => pure ()
    StrCons _ _ =>
      let l = length text
      in writeIORef ui.uiComposer (substr 0 (cast (minus l 1)) text)
-- Regular character input
handleKey ui (KeyChar c) = do
  text <- readIORef ui.uiComposer
  writeIORef ui.uiComposer (text ++ singleton c)
-- Help
handleKey ui KeyF1 = do
  writeIORef ui.uiFeedback (Just "EDEN/Adam Idris2 TUI | Esc/Ctrl+Q/F12=quit | Enter=send | Type to chat")
-- Ignore other keys
handleKey _ _ = pure ()

------------------------------------------------------------------------
-- Main TUI loop
------------------------------------------------------------------------

||| Run the TUI main loop.
tuiLoop : UIState -> IO ()
tuiLoop ui = do
  key <- readKey 500
  case key of
    KeyNone => do
      quit <- readIORef ui.uiQuit
      if quit
        then pure ()
        else tuiLoop ui
    k => do
      handleKey ui k
      quit <- readIORef ui.uiQuit
      if quit
        then pure ()
        else do
          renderFrame ui
          tuiLoop ui

------------------------------------------------------------------------
-- Entry point
------------------------------------------------------------------------

||| Initialize and run the TUI.
export
runTUI : IO ()
runTUI = do
  -- Set up runtime
  store <- newStore
  let ts = MkTimestamp "2026-03-26T00:00:00Z"
  exp <- createExperiment store "tui" "tui" Blank ts
  let agentId = MkId {a=AgentTag} "adam-01"
  sess <- createSession store exp.id agentId "TUI session" ts

  -- Seed behavior memes
  _ <- upsertMeme store exp.id "Curiosity" "Drive to explore and understand" Behavior SeedSource Global ts
  _ <- upsertMeme store exp.id "Honesty" "Commitment to truthful communication" Behavior SeedSource Global ts
  _ <- upsertMeme store exp.id "Clarity" "Preference for clear explanations" Behavior SeedSource Global ts

  -- Create EdenEnv
  env <- newEdenEnv store exp.id sess.id ts

  -- Create UI state
  turnIdx <- newIORef (the Nat 0)
  composer <- newIORef ""
  dialogue <- newIORef (the (List (String, String)) [])
  feedback <- newIORef (the (Maybe String) Nothing)
  lastActive <- newIORef (the (List CandidateScore) [])
  lastHum <- newIORef (the (Maybe HumPayload) Nothing)
  lastBudget <- newIORef (the (Maybe BudgetEstimate) Nothing)
  lastProj <- newIORef (the (List MemeProjection) [])
  focusPanel <- newIORef (the Nat 0)
  scrollOff <- newIORef (the Nat 0)
  quit <- newIORef False
  uiW <- newIORef (the Int 120)
  uiH <- newIORef (the Int 30)

  let ui = MkUIState env turnIdx composer dialogue feedback
                     lastActive lastHum lastBudget lastProj
                     focusPanel scrollOff quit uiW uiH

  -- Enter TUI mode
  ok <- enterTUI
  if ok
    then do
      renderFrame ui
      tuiLoop ui
      leaveTUI
      putStrLn "Goodbye."
    else do
      putStrLn "Failed to initialize terminal. Falling back to REPL."
