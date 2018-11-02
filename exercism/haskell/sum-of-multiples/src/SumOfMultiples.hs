module SumOfMultiples
  ( sumOfMultiples
  ) where

sumOfMultiples :: [Integer] -> Integer -> Integer
sumOfMultiples factors limit =
  let factored x = any (\y -> mod x y == 0) factors
   in sum $ filter factored [1 .. (limit - 1)]
