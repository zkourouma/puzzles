module Pangram
  ( isPangram
  )
where

import           Data.Char                     as C

isPangram :: String -> Bool
isPangram text = null left
 where
  lowered  = map C.toLower text
  includes = (`elem` lowered)
  left     = dropWhile includes ['a' .. 'z']
