module Day02Spec
  ( spec
  ) where

import           Day02      (getData, part1, part2)
import           Test.Hspec

spec :: Spec
spec =
  before getData $ do
    describe "part1" $
      it "finds the checksum of 2 and 3" $ \d -> part1 d `shouldBe` 9633
    describe "part2" $ do
      it "passes the README test" $ \_ ->
        part2 ["abcde", "fghij", "klmno", "pqrst", "fguij", "azcye", "wvxyz"] `shouldBe`
        "fgij"
      it "finds the correct intersection" $ \d ->
        part2 d `shouldBe` "lujnogabetpmsydyfcovzixaw"
