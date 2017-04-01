def distance(dna1, dna2):
    diff = 0
    for letter1, letter2 in zip(dna1, dna2):
        if letter1 != letter2:
            diff += 1
    return diff
