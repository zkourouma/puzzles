module CollatzConjecture
  ( collatz
  ) where

import           Data.List

collatz :: Integer -> Maybe Integer
collatz n
  | n < 1 = Nothing
  | otherwise =
    Just $
    genericLength $
    takeWhile (/= 1) $
    iterate
      (\n ->
         if even n
           then n `div` 2
           else 3 * n + 1)
      n
