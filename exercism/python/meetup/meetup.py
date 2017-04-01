from datetime import date


WEEKDAYS = {'Monday': 0, 'Tuesday': 1, 'Wednesday': 2, 'Thursday': 3,
            'Friday': 4, 'Saturday': 5, 'Sunday': 6}
ORDERS = {'1st': 0, '2nd': 7, '3rd': 14, '4th': 21}


def meetup_day(year, month, day_of_week, ordinal):
    first_day = date(year, month, 1).weekday()
    asked_day = WEEKDAYS[day_of_week]
    first_date = 0

    for x in xrange(7):
        if (first_day + x) % 7 == asked_day:
            first_date = 1 + x
            break

    if ordinal in ORDERS:
        return date(year, month, first_date + ORDERS[ordinal])
    elif ordinal == 'teenth':
        if first_date < 6:
            return date(year, month, first_date + 14)
        else:
            return date(year, month, first_date + 7)
    else:
        return date(year, month, first_date + 28)
