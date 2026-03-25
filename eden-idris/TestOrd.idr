module Main

main : IO ()
main = do
  putStrLn $ "compare 1.0 2.0 = " ++ show (compare (the Double 1.0) 2.0)
  putStrLn $ "1.0 < 2.0 = " ++ show (the Double 1.0 < 2.0)
  putStrLn $ "1.0 > 2.0 = " ++ show (the Double 1.0 > 2.0)
  putStrLn $ "2.0 >= 1.0 = " ++ show (the Double 2.0 >= 1.0)
  -- Test primitive
  let diff = 2.0 - 1.0
  putStrLn $ "2.0 - 1.0 = " ++ show diff
  let signBit = cast {to=Integer} (diff * 1000.0)
  putStrLn $ "sign(diff*1000) = " ++ show signBit
