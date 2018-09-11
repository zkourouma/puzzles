module Pangram
  ( isPangram
  ) where

isPangram :: String -> Bool
isPangram text = null left
  where
    includes (c, cs) = c `elem` text || cs `elem` text
    left = dropWhile includes $ zip ['A' .. 'Z'] ['a' .. 'z']
