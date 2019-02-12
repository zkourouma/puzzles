module DNA
  ( nucleotideCounts
  )
where

import           Data.List                      ( foldl )
import           Data.Map                       ( Map
                                                , adjust
                                                , fromList
                                                , member
                                                )

basePairs :: Map Char Int
basePairs = fromList [('A', 0), ('C', 0), ('T', 0), ('G', 0)]

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts = foldl nucleotideCounts' (Right basePairs)

nucleotideCounts'
  :: Either String (Map Char Int) -> Char -> Either String (Map Char Int)
nucleotideCounts' (Right acc) c | member c acc = Right (adjust (+ 1) c acc)
                                | otherwise    = Left "Error"
nucleotideCounts' (Left msg) _ = Left msg
