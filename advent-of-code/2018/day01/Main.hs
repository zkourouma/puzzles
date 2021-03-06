{-# LANGUAGE OverloadedStrings #-}

module Main
  ( main
  , getData
  , part1
  , part2
  ) where

import qualified Data.Set      as Set
import           Paths_AoC2018

file :: IO FilePath
file = getDataFileName "inputs/01-0"

main :: IO ()
main = do
  inputs <- getData
  print $ part1 inputs
  print $ part2 inputs

getData :: IO [Int]
getData = map parser . lines <$> (readFile =<< file)

parser :: String -> Int
parser ('+':num) = read num
parser ('-':num) = (-1) * read num
parser _         = 0

part1 :: [Int] -> Int
part1 = sum

part2 :: [Int] -> Int
part2 d = part2' (cycle d) 0 (Set.singleton 0)

part2' :: [Int] -> Int -> Set.Set Int -> Int
part2' [] y _ = y
part2' (x:xs) y seen =
  let y' = x + y
   in if Set.member y' seen
        then y'
        else part2' xs y' (Set.insert y' seen)
