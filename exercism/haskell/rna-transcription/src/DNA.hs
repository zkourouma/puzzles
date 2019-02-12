module DNA
  ( toRNA
  )
where

import           Data.Map.Lazy                  ( Map
                                                , fromList
                                                , (!?)
                                                )


dnaRnaLookup :: Map Char Char
dnaRnaLookup = fromList [('A', 'U'), ('T', 'A'), ('G', 'C'), ('C', 'G')]

toRNA :: String -> Maybe String
toRNA = mapM (dnaRnaLookup !?)
