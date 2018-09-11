module Pangram
  ( isPangram
  ) where

isPangram :: String -> Bool
isPangram text = null left
  where
    includes (upper, lower) = upper `elem` text || lower `elem` text
    left = dropWhile includes $ zip ['A' .. 'Z'] ['a' .. 'z']
