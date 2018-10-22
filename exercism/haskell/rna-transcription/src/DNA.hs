module DNA
  ( toRNA
  ) where

import           Data.Map.Lazy (fromList, (!?))

dna = fromList [('A', 'U'), ('T', 'A'), ('G', 'C'), ('C', 'G')]

toRNA :: String -> Maybe String
toRNA = mapM (dna !?)
