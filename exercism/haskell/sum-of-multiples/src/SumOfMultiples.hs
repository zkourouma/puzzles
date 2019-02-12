module SumOfMultiples
  ( sumOfMultiples
  )
where

import           Data.Set                       ( Set
                                                , fromDistinctAscList
                                                , singleton
                                                , unions
                                                )

sumOfMultiples :: [Integer] -> Integer -> Integer
sumOfMultiples factors limit = sum . unions . map multiples $ factors
 where
  multiples :: Integer -> Set Integer
  multiples 0 = singleton 0
  multiples f = fromDistinctAscList [0, f .. limit - 1]
