from operator import mul


def slices(series, size):
    if len(series) < size:
        raise ValueError('you can\'t do that')
    pieces = []
    for i in range(len(series) - 1):
        pieces.append(map(lambda x: int(x), [y for y in series[i:size + i]]))
    return pieces


def largest_product(series, size):
    slices_list = slices(series, size)
    largest = 1
    for group in slices_list:
        largest = max(largest, reduce(mul, group))
    return largest
