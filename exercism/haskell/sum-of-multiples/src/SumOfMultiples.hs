module SumOfMultiples
  ( sumOfMultiples
  ) where

import           Data.Set (fromList, toList)

sumOfMultiples :: [Integer] -> Integer -> Integer
sumOfMultiples factors limit =
  let factors' f = takeWhile (< limit) (map (* f) [0 ..])
   in sum $ (toList . fromList . mconcat) $ map factors' factors
