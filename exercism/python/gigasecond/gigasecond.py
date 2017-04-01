from datetime import timedelta


def add_gigasecond(birthday):
    gigs = 10**9
    return birthday + timedelta(seconds=gigs)
