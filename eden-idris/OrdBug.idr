module Main

main : IO ()
main = do
  let a : Double = 1.0
  let b : Double = 2.0
  putStrLn "--- compare ---"
  putStrLn $ "compare 1.0 2.0 = " ++ show (compare a b)
  putStrLn $ "compare 2.0 1.0 = " ++ show (compare b a)
  putStrLn $ "compare 1.0 1.0 = " ++ show (compare a a)
  putStrLn ""
  putStrLn "--- operators ---"
  putStrLn $ "1.0 <  2.0 = " ++ show (a < b)
  putStrLn $ "2.0 <  1.0 = " ++ show (b < a)
  putStrLn $ "1.0 >  2.0 = " ++ show (a > b)
  putStrLn $ "2.0 >  1.0 = " ++ show (b > a)
  putStrLn $ "1.0 <= 2.0 = " ++ show (a <= b)
  putStrLn $ "2.0 <= 1.0 = " ++ show (b <= a)
  putStrLn $ "1.0 >= 2.0 = " ++ show (a >= b)
  putStrLn $ "2.0 >= 1.0 = " ++ show (b >= a)
  putStrLn $ "1.0 == 1.0 = " ++ show (a == a)
  putStrLn ""
  putStrLn "--- max / min ---"
  putStrLn $ "max 1.0 2.0 = " ++ show (max a b)
  putStrLn $ "min 1.0 2.0 = " ++ show (min a b)
  putStrLn $ "max (-3.0) 0.5 = " ++ show (the Double (max (-3.0) 0.5))
  putStrLn $ "min (-3.0) 0.5 = " ++ show (the Double (min (-3.0) 0.5))
  putStrLn ""
  putStrLn "--- negative ---"
  let c : Double = -1.0
  let d : Double = -2.0
  putStrLn $ "compare (-1.0) (-2.0) = " ++ show (compare c d)
  putStrLn $ "(-1.0) <  (-2.0) = " ++ show (c < d)
  putStrLn $ "(-1.0) >  (-2.0) = " ++ show (c > d)
  putStrLn $ "(-2.0) <  (-1.0) = " ++ show (d < c)
  putStrLn $ "(-2.0) >  (-1.0) = " ++ show (d > c)
  putStrLn ""
  putStrLn "--- Eq Ordering ---"
  putStrLn $ "LT == LT = " ++ show (LT == LT)
  putStrLn $ "GT == GT = " ++ show (GT == GT)
  putStrLn $ "LT == GT = " ++ show (LT == GT)
  putStrLn $ "GT == LT = " ++ show (GT == LT)
  putStrLn $ "EQ == EQ = " ++ show (EQ == EQ)
  putStrLn ""
  putStrLn "--- derived from compare ---"
  let cmp = compare a b
  putStrLn $ "cmp = compare 1.0 2.0 = " ++ show cmp
  putStrLn $ "cmp == LT = " ++ show (cmp == LT)
  putStrLn $ "cmp == GT = " ++ show (cmp == GT)
  putStrLn $ "cmp == EQ = " ++ show (cmp == EQ)
  putStrLn $ "cmp /= GT = " ++ show (cmp /= GT)
