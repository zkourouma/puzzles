module Day01Spec
  ( spec
  ) where

import           Day01      (getData, part1, part2)
import           Test.Hspec

spec :: Spec
spec =
  before getData $ do
    describe "part1" $
      it "computes the frequency" $ \d -> part1 d `shouldBe` 582
    describe "part2" $
      it "finds the repeated frequency" $ \d -> part2 d `shouldBe` 488
