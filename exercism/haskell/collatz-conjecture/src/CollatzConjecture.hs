module CollatzConjecture
  ( collatz
  ) where

collatz :: Integer -> Maybe Integer
collatz n
  | n < 1 = Nothing
  | otherwise = collatz' n (Just 0)

collatz' :: Integer -> Maybe Integer -> Maybe Integer
collatz' n maybeCount
  | n == 1 = maybeCount
  | even n = collatz' (n `div` 2) (fmap (+ 1) maybeCount)
  | odd n = collatz' (3 * n + 1) (fmap (+ 1) maybeCount)
