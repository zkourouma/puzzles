ALPHA_VALUE = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8,
               'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
               'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22,
               'w': 23, 'x': 24, 'y': 25, 'z': 26}


def get_names(filename):
    with open(filename, 'rb') as namefile:
        name_list = namefile.readline().split(',')

    cleaned_names = [list(name.lower().strip('"')) for name in name_list]
    cleaned_names.sort()
    return cleaned_names


def score_names(name_list):
    total_score = 0
    for i, name in enumerate(name_list):
        total_score += sum([ALPHA_VALUE[letter] for letter in name]) * (i + 1)

    return total_score


if __name__ == '__main__':
    names = get_names('p022_names.txt')
    print score_names(names)
