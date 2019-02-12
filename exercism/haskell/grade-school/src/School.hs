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
  (gradeNum, insert student students) : filter (\g -> fst g /= gradeNum) school
  where students = grade gradeNum school

empty :: School
empty = []

grade :: Int -> School -> [String]
grade gradeNum school = case grade' gradeNum school of
  Nothing -> []
  Just g  -> snd g

grade' :: Int -> School -> Maybe (Int, [String])
grade' gradeNum = find byGrade where byGrade g = fst g == gradeNum

sorted :: School -> [(Int, [String])]
sorted = sort
