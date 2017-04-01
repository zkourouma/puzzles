def is_leap_year(year):
    leap_year = False if year % 4 else True

    if not year % 400:
        leap_year = True
    elif not year % 100:
        leap_year = False

    return leap_year
