def sieve(limit):
    unmarked = [2] + filter(lambda x: x % 2 != 0, range(3, limit + 1))
    counter = 0
    while counter < len(unmarked):
        prime = unmarked[counter]
        unmarked = filter(lambda x: x == prime or x % prime != 0, unmarked)
        counter += 1
    return unmarked
