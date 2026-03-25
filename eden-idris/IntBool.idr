module Main

myIntToBool : Int -> Bool
myIntToBool 0 = False
myIntToBool _ = True

myIntToBool2 : Int -> Bool
myIntToBool2 x = if x == 0 then False else True

main : IO ()
main = do
  putStrLn "--- intToBool (pattern match on Int 0) ---"
  putStrLn $ "intToBool 0 = " ++ show (myIntToBool 0)
  putStrLn $ "intToBool 1 = " ++ show (myIntToBool 1)
  putStrLn $ "intToBool 42 = " ++ show (myIntToBool 42)
  putStrLn $ "intToBool (-1) = " ++ show (myIntToBool (-1))
  putStrLn ""
  putStrLn "--- intToBool2 (if x == 0) ---"
  putStrLn $ "intToBool2 0 = " ++ show (myIntToBool2 0)
  putStrLn $ "intToBool2 1 = " ++ show (myIntToBool2 1)
  putStrLn ""
  putStrLn "--- raw prim + intToBool ---"
  let r = prim__lt_Int 5 3
  putStrLn $ "prim__lt_Int 5 3 = " ++ show r
  putStrLn $ "myIntToBool (prim__lt_Int 5 3) = " ++ show (myIntToBool r)
  putStrLn $ "myIntToBool2 (prim__lt_Int 5 3) = " ++ show (myIntToBool2 r)
