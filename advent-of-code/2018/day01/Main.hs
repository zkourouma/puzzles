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
  print $ part2 inputs

getData :: IO [String]
getData = lines <$> (readFile =<< file)

part1 :: [String] -> Integer
part1 = foldl reducer 0

reducer :: Integer -> String -> Integer
reducer acc s = acc + parser s

part2 :: [String] -> Integer
part2 s =
  let fs = cycle $ map parser s
      seen = Set.singleton 0
   in part2' fs 0 seen

part2' :: [Integer] -> Integer -> Set.Set Integer -> Integer
part2' [] y _ = y
part2' (x:xs) y seen =
  let y' = x + y
   in if Set.member y' seen
        then y'
        else part2' xs y' (Set.insert y' seen)

parser :: String -> Integer
parser ('+':num) = read num
parser ('-':num) = (-1) * read num
parser _         = 0
