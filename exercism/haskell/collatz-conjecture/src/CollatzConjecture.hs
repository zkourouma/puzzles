module CollatzConjecture
  ( collatz
  ) where

import           Data.List

collatz :: Integer -> Maybe Integer
collatz n
  | n < 1 = Nothing
  | otherwise = Just . genericLength . takeWhile (/= 1) $ iterate step n

step :: Integer -> Integer
step n
  | even n = n `div` 2
  | otherwise = 3 * n + 1
