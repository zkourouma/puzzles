module Bob
  ( responseFor
  ) where

import           Data.Char as C
import           Data.Text as T

responseFor :: String -> String
responseFor xs = responseFor' . T.strip $ T.pack xs

responseFor' :: Text -> String
responseFor' ys
  | ys == T.pack "" = "Fine. Be that way!"
  | shouting ys = "Whoa, chill out!"
  | T.last ys == '?' = "Sure."
  | otherwise = "Whatever."

shouting :: Text -> Bool
shouting t
  | T.last t == '!' = shouting' t
  | T.all (not . C.isAlpha) t = False
  | otherwise = shouting' t

shouting' :: Text -> Bool
shouting' = T.all (not . C.isLower)
