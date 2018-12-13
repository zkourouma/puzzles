module Main
  ( main
  , getData
  , part1
  , part2
  ) where

import           Paths_AoC2018

file :: IO FilePath
file = getDataFileName "inputs/03-0"

main :: IO ()
main = do
  inputs <- getData
  print $ part1 inputs

getData :: IO [String]
getData = lines <$> (readFile =<< file)

part1 :: [String] -> Int
part1 _ = undefined

part2 :: [String] -> Int
part2 _ = undefined
