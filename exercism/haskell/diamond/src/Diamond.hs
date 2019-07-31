module Diamond
  ( diamond
  )
where

import           Data.List                      ( elemIndex
                                                , map
                                                )

alphabet :: String
alphabet = ['A' .. 'Z']

diamond :: Char -> Maybe [String]
diamond c = forgeDiamond $ elemIndex c alphabet


forgeDiamond :: Maybe Int -> Maybe [String]
forgeDiamond Nothing  = Nothing
forgeDiamond (Just 0) = Just ["A"]
forgeDiamond (Just idx) =
  let maxWidth       = idx + 1
      indexedLetters = take maxWidth $ zip ([0] ++ [1, 3 ..]) alphabet
      strs           = map (makeLine maxWidth) indexedLetters
      strs'          = reverse $ take idx strs
  in  Just $ strs ++ strs'


makeLine :: Int -> (Int, Char) -> String
makeLine maxWidth (0, c) = marginSpace ++ [c] ++ marginSpace
 where
  margin      = (getMargin (maxWidth + 1))
  marginSpace = take margin $ repeat ' '

makeLine maxWidth (filler, c) =
  marginSpace ++ [c] ++ middle ++ [c] ++ marginSpace
 where
  middle      = take filler $ repeat ' '
  margin      = getMargin (maxWidth - filler + 1)
  marginSpace = take margin $ repeat ' '

getMargin :: Integral a => a -> a
getMargin x | even x    = x `quot` 2
            | otherwise = (x + 1) `quot` 2
