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
  let width = idx + 1
      half  = map (makeLayer width) $ take width $ zip3 [1 ..]
                                                        ([0] ++ [1, 3 ..])
                                                        alphabet
  in  Just $ half ++ (reverse $ take idx half)


makeLayer :: Int -> (Int, Int, Char) -> String
makeLayer width (idx, 0, c) = margins ++ [c] ++ margins
  where margins = take (width - idx) $ repeat ' '
makeLayer width (idx, width', c) = margins ++ [c] ++ middle ++ [c] ++ margins
 where
  middle  = take width' $ repeat ' '
  margins = take (width - idx) $ repeat ' '
