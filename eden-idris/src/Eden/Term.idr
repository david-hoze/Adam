||| ANSI terminal control for the EDEN TUI.
|||
||| Provides cursor movement, colors, screen clearing, and raw mode.
||| Works on both MSYS2/mintty (Windows) and macOS Terminal.
module Eden.Term

import Data.String

%default total

------------------------------------------------------------------------
-- ANSI escape sequences
------------------------------------------------------------------------

||| CSI (Control Sequence Introducer) prefix.
public export
csi : String
csi = "\x1b["

||| Begin synchronized output (terminal batches all updates).
public export
beginSync : String
beginSync = csi ++ "?2026h"

||| End synchronized output (terminal renders batched content atomically).
public export
endSync : String
endSync = csi ++ "?2026l"

------------------------------------------------------------------------
-- Cursor movement
------------------------------------------------------------------------

||| Move cursor to (row, col). 1-based.
public export
moveTo : (row : Nat) -> (col : Nat) -> String
moveTo r c = csi ++ show r ++ ";" ++ show c ++ "H"

||| Move cursor up n lines.
public export
moveUp : Nat -> String
moveUp n = csi ++ show n ++ "A"

||| Move cursor down n lines.
public export
moveDown : Nat -> String
moveDown n = csi ++ show n ++ "B"

||| Move cursor right n columns.
public export
moveRight : Nat -> String
moveRight n = csi ++ show n ++ "C"

||| Move cursor left n columns.
public export
moveLeft : Nat -> String
moveLeft n = csi ++ show n ++ "D"

||| Save cursor position.
public export
saveCursor : String
saveCursor = csi ++ "s"

||| Restore cursor position.
public export
restoreCursor : String
restoreCursor = csi ++ "u"

||| Hide cursor.
public export
hideCursor : String
hideCursor = csi ++ "?25l"

||| Show cursor.
public export
showCursor : String
showCursor = csi ++ "?25h"

------------------------------------------------------------------------
-- Screen clearing
------------------------------------------------------------------------

||| Clear entire screen.
public export
clearScreen : String
clearScreen = csi ++ "2J"

||| Clear from cursor to end of screen.
public export
clearToEnd : String
clearToEnd = csi ++ "J"

||| Clear from cursor to end of line.
public export
clearLine : String
clearLine = csi ++ "K"

||| Clear entire line.
public export
clearFullLine : String
clearFullLine = csi ++ "2K"

------------------------------------------------------------------------
-- Colors (SGR - Select Graphic Rendition)
------------------------------------------------------------------------

||| Reset all attributes.
public export
reset : String
reset = csi ++ "0m"

||| Bold text.
public export
bold : String
bold = csi ++ "1m"

||| Dim text.
public export
dim : String
dim = csi ++ "2m"

||| Italic text.
public export
italic : String
italic = csi ++ "3m"

||| Underline text.
public export
underline : String
underline = csi ++ "4m"

||| Reverse video.
public export
reverse : String
reverse = csi ++ "7m"

------------------------------------------------------------------------
-- 256-color support
------------------------------------------------------------------------

||| Foreground color from 256-color palette.
public export
fg256 : (color : Nat) -> String
fg256 c = csi ++ "38;5;" ++ show c ++ "m"

||| Background color from 256-color palette.
public export
bg256 : (color : Nat) -> String
bg256 c = csi ++ "48;5;" ++ show c ++ "m"

------------------------------------------------------------------------
-- 24-bit (truecolor) support
------------------------------------------------------------------------

||| Foreground color from RGB.
public export
fgRGB : (r : Nat) -> (g : Nat) -> (b : Nat) -> String
fgRGB r g b = csi ++ "38;2;" ++ show r ++ ";" ++ show g ++ ";" ++ show b ++ "m"

||| Background color from RGB.
public export
bgRGB : (r : Nat) -> (g : Nat) -> (b : Nat) -> String
bgRGB r g b = csi ++ "48;2;" ++ show r ++ ";" ++ show g ++ ";" ++ show b ++ "m"

------------------------------------------------------------------------
-- Named EDEN palette colors (Amber Dark theme)
------------------------------------------------------------------------

||| Warm cream text.
public export
fgText : String
fgText = fgRGB 255 241 210

||| Amber accent.
public export
fgAmber : String
fgAmber = fgRGB 255 217 138

||| Green/neon (knowledge, success).
public export
fgNeon : String
fgNeon = fgRGB 132 255 208

||| Cyan/ice (memodes, info).
public export
fgIce : String
fgIce = fgRGB 141 220 255

||| Pink/rose (behavior, warnings).
public export
fgRose : String
fgRose = fgRGB 255 122 215

||| Orange/ember (errors, high pressure).
public export
fgEmber : String
fgEmber = fgRGB 255 174 87

||| Violet (relations).
public export
fgViolet : String
fgViolet = fgRGB 168 144 255

||| Muted amber.
public export
fgMuted : String
fgMuted = fgRGB 230 171 90

||| Dark background.
public export
bgDark : String
bgDark = bgRGB 18 8 10

||| Panel background.
public export
bgPanel : String
bgPanel = bgRGB 33 16 20

||| Adam response background (dark wine).
public export
bgAdam : String
bgAdam = bgRGB 50 18 33

------------------------------------------------------------------------
-- Scrolling region
------------------------------------------------------------------------

||| Set scrolling region to rows top..bottom (1-based).
public export
setScrollRegion : (top : Nat) -> (bottom : Nat) -> String
setScrollRegion t b = csi ++ show t ++ ";" ++ show b ++ "r"

||| Reset scrolling region to full screen.
public export
resetScrollRegion : String
resetScrollRegion = csi ++ "r"

------------------------------------------------------------------------
-- Alternate screen buffer
------------------------------------------------------------------------

||| Enter alternate screen buffer (preserves main screen).
public export
enterAltScreen : String
enterAltScreen = csi ++ "?1049h"

||| Leave alternate screen buffer (restores main screen).
public export
leaveAltScreen : String
leaveAltScreen = csi ++ "?1049l"

------------------------------------------------------------------------
-- Styled text helpers
------------------------------------------------------------------------

||| Wrap text in a color, then reset.
public export
styled : (color : String) -> (text : String) -> String
styled c t = c ++ t ++ reset

||| Render a horizontal line of a character.
public export
hline : (width : Nat) -> (ch : Char) -> String
hline w c = pack (replicate w c)

||| Render a box border top/bottom.
public export
boxBorder : (width : Nat) -> String
boxBorder w = "+" ++ hline (minus w 2) '-' ++ "+"

||| Pad text to a given width (right-pad with spaces).
public export
padRight : (width : Nat) -> String -> String
padRight w s =
  let l = length s
  in if l >= w then substr 0 (cast w) s
     else s ++ pack (replicate (minus w l) ' ')

||| Pad text to a given width (left-pad with spaces).
public export
padLeft : (width : Nat) -> String -> String
padLeft w s =
  let l = length s
  in if l >= w then substr 0 (cast w) s
     else pack (replicate (minus w l) ' ') ++ s

||| Truncate text to a max width, adding "..." if truncated.
public export
truncate : (maxWidth : Nat) -> String -> String
truncate w s =
  if length s <= w then s
  else substr 0 (cast (minus w 3)) s ++ "..."

------------------------------------------------------------------------
-- Meter bar rendering
------------------------------------------------------------------------

||| Render a meter bar: [========    ] (filled/total).
public export
meterBar : (width : Nat) -> (filled : Nat) -> (capacity : Nat) -> String
meterBar w filled capacity =
  let pct = if capacity == 0 then 0
            else min w (cast (the Integer (cast (floor (cast {to=Double} filled / cast {to=Double} capacity * cast {to=Double} w)))))
      empty = minus w pct
  in "[" ++ hline pct '=' ++ hline empty ' ' ++ "]"
