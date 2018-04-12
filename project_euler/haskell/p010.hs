problemOne = sum . filter (\n -> mod n 3 || mod n 5) [1 .. 1000]
