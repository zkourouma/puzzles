module Bob
  ( responseFor
  ) where

import           Data.Char        as C
import           Data.Text        as T
import           Text.Regex.Posix

responseFor :: String -> String
responseFor xs = responseFor' . T.strip $ T.pack xs

responseFor' :: Text -> String
responseFor' ys
  | ys == T.pack "" = "Fine. Be that way!"
  | ys == T.map C.toUpper ys && isInt (T.unpack ys) = "Whoa, chill out!"
  | T.last ys == '?' = "Sure."
  | otherwise = "Whatever."

isInt :: String -> Bool
isInt xs = xs =~ "[A-Za-z]" :: Bool
