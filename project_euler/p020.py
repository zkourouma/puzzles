import math
import sys


def factorial_sum(base):
    factorials = math.factorial(base)
    f = [int(x) for x in list(str(factorials))]
    return sum(f)


if __name__ == "__main__":
    base = int(sys.argv[1])
    print factorial_sum(base)
