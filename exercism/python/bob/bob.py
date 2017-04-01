#
# Skeleton file for the Python "Bob" exercise.
#
import re


def hey(foo):
    bar = foo.strip()

    if not len(bar):
        return 'Fine. Be that way!'
    elif re.search('[a-z0-9]+.*\?$', bar):
        return 'Sure.'
    elif all_upper(bar):
        return 'Whoa, chill out!'
    return 'Whatever.'


def all_upper(check_str):
    return not re.search('[a-z]', check_str) and re.search('[A-Z]+', check_str) \
        and check_str == check_str.upper()
