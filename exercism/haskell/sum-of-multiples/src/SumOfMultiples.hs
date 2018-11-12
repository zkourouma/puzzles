module SumOfMultiples
  ( sumOfMultiples
  ) where

import           Data.Set (fromDistinctAscList, unions)

sumOfMultiples :: [Integer] -> Integer -> Integer
sumOfMultiples factors limit =
  let multiples f = fromDistinctAscList $ takeWhile (< limit) (map (* f) [0 ..])
   in sum $ unions $ map multiples factors
