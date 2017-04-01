def slices(input_str, length):
    if length == 0 or len(input_str) < length:
        raise ValueError
    slicez = []
    for i in range(len(input_str) - length + 1):
        slicez.append([int(n) for n in input_str[i:i+length]])
    return slicez
