module Main

main : IO ()
main = do
  putStrLn "=== Int ==="
  putStrLn $ "compare 1 2   = " ++ show (compare (the Int 1) 2)
  putStrLn $ "compare 2 1   = " ++ show (compare (the Int 2) 1)
  putStrLn $ "compare 1 1   = " ++ show (compare (the Int 1) 1)
  putStrLn ""
  putStrLn "=== Integer ==="
  putStrLn $ "compare 1 2   = " ++ show (compare (the Integer 1) 2)
  putStrLn $ "compare 2 1   = " ++ show (compare (the Integer 2) 1)
  putStrLn $ "compare 1 1   = " ++ show (compare (the Integer 1) 1)
  putStrLn ""
  putStrLn "=== Nat ==="
  putStrLn $ "compare 1 2   = " ++ show (compare (the Nat 1) 2)
  putStrLn $ "compare 2 1   = " ++ show (compare (the Nat 2) 1)
  putStrLn $ "compare 1 1   = " ++ show (compare (the Nat 1) 1)
  putStrLn ""
  putStrLn "=== Double (primitive ops) ==="
  putStrLn $ "prim 1.0 == 2.0 = " ++ show (prim__eq_Double 1.0 2.0)
  putStrLn $ "prim 1.0 == 1.0 = " ++ show (prim__eq_Double 1.0 1.0)
  putStrLn $ "prim 1.0 <  2.0 = " ++ show (prim__lt_Double 1.0 2.0)
  putStrLn $ "prim 2.0 <  1.0 = " ++ show (prim__lt_Double 2.0 1.0)
  putStrLn $ "prim 1.0 <= 2.0 = " ++ show (prim__lte_Double 1.0 2.0)
  putStrLn $ "prim 2.0 <= 1.0 = " ++ show (prim__lte_Double 2.0 1.0)
