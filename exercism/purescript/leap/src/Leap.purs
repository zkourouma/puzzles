module Leap where

import Prelude

isLeapYear :: Int -> Boolean
isLeapYear n = n `isModulo` 4 && (n `mod` 100 /= 0 || n `isModulo` 400) 

isModulo :: Int -> Int -> Boolean
isModulo x y = mod x y == 0
