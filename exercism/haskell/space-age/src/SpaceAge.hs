module SpaceAge (Planet(..), ageOn) where

data Planet = Mercury
            | Venus
            | Earth
            | Mars
            | Jupiter
            | Saturn
            | Uranus
            | Neptune

factor :: Planet -> Float
factor Mercury = 0.2408467
factor Venus = 0.61519726
factor Earth = 1.0
factor Mars = 1.8808158
factor Jupiter = 11.862615
factor Saturn = 29.447498
factor Uranus = 84.016846
factor Neptune = 164.79132

ageOn :: Planet -> Float -> Float
ageOn planet seconds = seconds / 31557600 / factor planet
