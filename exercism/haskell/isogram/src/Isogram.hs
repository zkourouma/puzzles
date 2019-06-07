module Isogram
  ( isIsogram
  )
where

import           Data.Set                       ( Set
                                                , empty
                                                , insert
                                                , member
                                                )
import           Data.Char                      ( isAlpha
                                                , toLower
                                                )

isIsogram :: String -> Bool
isIsogram = isIsogram' empty . map toLower

isIsogram' :: Set Char -> String -> Bool
isIsogram' _ [] = True
isIsogram' charSet (c : cs) | isAlpha c && member c charSet = False
                            | isAlpha c = isIsogram' (insert c charSet) cs
                            | otherwise = isIsogram' charSet cs
