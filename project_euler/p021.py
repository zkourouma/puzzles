import math
import sys


def get_divisors(num):
    divs, y = [1], 2

    while y <= math.sqrt(num):
        if not num % y:
            divs += [y, num / y]
        y += 1

    return set(divs)


def sum_amicable_pairs(limit):
    mem, running = {}, []
    for x in range(1, limit):
        tot = sum(get_divisors(x))
        if mem.get(tot):
            mem[tot].append(x)
        else:
            mem[tot] = [x]
        if tot in mem.get(x, []) and tot != x:
            running += [x, tot]
    return sum(set(running))

if __name__ == "__main__":
    limit = int(sys.argv[1])
    print sum_amicable_pairs(limit)
