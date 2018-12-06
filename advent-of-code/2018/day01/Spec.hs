module Spec where

import           Main       (getData, part1)
import           Test.Hspec

main :: IO ()
main = hspec spec

spec :: Spec
spec =
  before getData $ do
    describe "part1" $
      it "computes the frequency" $ \d -> part1 d `shouldBe` 582
    describe "part2" $
      it "finds the repeated frequency" $ \d -> part2 d `shouldBe` 488
