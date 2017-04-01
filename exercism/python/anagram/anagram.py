def detect_anagrams(original, possible):
    anagrams = []
    for word in possible:
        if anagram_check(word.lower(), original.lower()):
            anagrams.append(word)
    return anagrams


def anagram_check(word, original):
    return word != original and sorted(word) == sorted(original)
