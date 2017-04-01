alpha = 'zyxwvutsrqponmlkjihgfedcba'
numeric = '0123456789'
cache = {}
for l in list(alpha):
    cache[l] = alpha[-(alpha.index(l))-1]
for n in list(numeric):
    cache[n] = n


def decode(cipher):
    text = ''
    for char in list(cipher):
        if char in alpha:
            text += cache[char]
    return text.strip()


def encode(text):
    cipher = ''
    for char in list(text.lower()):
        if char in alpha or char in numeric:
            cipher += cache[char]

    return break_up_cipher(cipher).strip()


def break_up_cipher(ciphertext):
    broken = ''
    for i, char in enumerate(list(ciphertext)):
        if not i % 5:
            broken += ' '
        broken += char
    return broken
