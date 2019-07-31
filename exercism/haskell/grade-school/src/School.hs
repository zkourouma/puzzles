module School
  ( School
  , add
  , empty
  , grade
  , sorted
  )
where

import           Data.List                      ( find
                                                , insert
                                                , sort
                                                )

type School = [(Int, [String])]

add :: Int -> String -> School -> School
add gradeNum student school =
  (gradeNum, insert student students) : filter byNotGrade school
 where
  students   = grade gradeNum school
  byNotGrade = (/= gradeNum) . fst

empty :: School
empty = []

grade :: Int -> School -> [String]
grade gradeNum school = maybe [] snd $ grade' gradeNum school

grade' :: Int -> School -> Maybe (Int, [String])
grade' gradeNum = find byGrade where byGrade = (== gradeNum) . fst

sorted :: School -> [(Int, [String])]
sorted = sort
