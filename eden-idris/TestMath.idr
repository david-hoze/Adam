module Main

main : IO ()
main = do
  putStrLn $ "exp(1.0)  = " ++ show (exp 1.0)
  putStrLn $ "exp(-1.0) = " ++ show (the Double (exp (the Double (-1.0))))
  putStrLn $ "log(10.0) = " ++ show (the Double (log 10.0))
  putStrLn $ "log(2.0)  = " ++ show (the Double (log 2.0))
  let x : Double = 0.3
  let y : Double = 0.1
  putStrLn $ "0.3 - 0.03 = " ++ show (x - 0.3 * y)
  putStrLn $ "max(-2,0.27) = " ++ show (the Double (max (-2.0) 0.27))
  putStrLn $ "min(2,0.27) = " ++ show (the Double (min 2.0 0.27))
  putStrLn $ "negate(0.5) = " ++ show (the Double (negate 0.5))
  putStrLn $ "exp(neg(0.5)) = " ++ show (the Double (exp (negate 0.5)))
