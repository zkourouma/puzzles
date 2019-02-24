module Leap where

import Data.EuclideanRing
import Data.Eq
import Data.HeytingAlgebra

isLeapYear :: Int -> Boolean
isLeapYear n = n `mod` 4 == 0 && (n `mod` 100 /= 0 || n `mod` 400 == 0) 
