module Main
  ( main
  , getData
  , part1
  , part2
  ) where

import           Data.List     (find, foldl', zipWith)
import qualified Data.Map      as M
import           Data.Maybe    (catMaybes)
import           Paths_AoC2018

file :: IO FilePath
file = getDataFileName "inputs/02-0"

main :: IO ()
main = do
  inputs <- getData
  print $ part2 inputs

getData :: IO [String]
getData = lines <$> (readFile =<< file)

part1 :: [String] -> Int
part1 d =
  let threes = counts 3 d
      twos = counts 2 d
   in threes * twos

counts :: Int -> [String] -> Int
counts n = foldl fits 0
  where
    fits acc s =
      if M.foldl (\b c -> c == n || b) False $ countChars s
        then acc + 1
        else acc

countChars :: String -> M.Map Char Int
countChars = foldl incChar M.empty
  where
    incChar :: M.Map Char Int -> Char -> M.Map Char Int
    incChar m c = M.insertWith (+) c 1 m

part2 :: [String] -> String
part2 d = snd $ foldl' reduce (d, "") d

reduce :: ([String], String) -> String -> ([String], String)
reduce (d, match) str =
  case find (finder str) d of
    Nothing   -> (d, match)
    Just st'r -> (d, str `intersect'` st'r)

finder :: String -> String -> Bool
finder x y = length (x `intersect'` y) == length x - 1

intersect' :: String -> String -> String
intersect' x y = catMaybes $ zipWith zipper x y
  where
    zipper a b =
      if a == b
        then Just a
        else Nothing
