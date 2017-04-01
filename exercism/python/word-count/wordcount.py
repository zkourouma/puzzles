def word_count(sentence):
    counter = {}

    for word in sentence.split():
        if counter.get(word):
            counter[word] += 1
        else:
            counter[word] = 1

    return counter
