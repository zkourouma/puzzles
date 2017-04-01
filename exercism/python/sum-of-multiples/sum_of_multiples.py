def sum_of_multiples(limit, factors=None):
    if factors is None:
        factors = [3, 5]
    elif 0 in factors:
        factors.remove(0)
    multiples = []
    for x in range(limit):
        if any(x % y == 0 for y in factors):
            multiples.append(x)
    return sum(multiples)
