{-# LANGUAGE OverloadedStrings #-}

module Main where

import           Paths_aoc2017

file :: IO FilePath
file = getDataFileName "input/day1-1"

getData :: IO String
getData = readFile =<< file

captcha inputs = map read inputs

main = do
  contents <- getData
  print . show $ captcha contents
