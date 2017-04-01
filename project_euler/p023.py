import math

DIVISOR_CACHE = {}
ABUNDANT_CACHE = {}


def get_divisors(num):
    if DIVISOR_CACHE.get(num):
        return DIVISOR_CACHE[num]

    divs, y = [1], 2

    while y <= math.sqrt(num):
        if not num % y:
            divs += [y, num / y]
        y += 1

    DIVISOR_CACHE[num] = set(divs)
    return DIVISOR_CACHE[num]


def abundant_numbers(y):
    return [x for x in xrange(1, y) if sum(get_divisors(x)) > x]


if __name__ == '__main__':
    abundants = abundant_numbers(28123)
    for i, x in enumerate(abundants):
        for y in abundants[i:]:
            ABUNDANT_CACHE[x + y] = True

    total = 0
    for n in xrange(1, 28123):
        if not ABUNDANT_CACHE.get(n):
            total += n

    print total
