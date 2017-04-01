package leap

func IsLeapYear(year int) bool {
	return (((year % 100) != 0) && ((year % 4) == 0)) || ((year % 400) == 0)
}

const TestVersion = 1
