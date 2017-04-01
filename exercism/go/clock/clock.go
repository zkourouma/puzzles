package clock

import "fmt"

const testVersion = 4

const hoursPerDay = 24
const minutesPerDay = 1440
const minutesPerHour = 60

type Clock struct {
	hour   int
	minute int
}

func New(hours, minutes int) Clock {
	hour, minute := _getTimes(hours, minutes)
	return Clock{hour, minute}
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hour, c.minute)
}

func (c Clock) Add(minutes int) Clock {
	hour, minute := _getTimes(c.hour, (c.minute + minutes))
	return Clock{hour, minute}
}

func _getModulated(time, modulo int) int {
	return ((time % modulo) + modulo) % modulo
}

func _calcMinutes(hours int) int {
	return _getModulated(hours, hoursPerDay) * minutesPerHour
}

func _calcTime(hours, minutes int) int {
	return _getModulated(_calcMinutes(hours)+minutes, minutesPerDay)
}

func _getTimes(hours, minutes int) (hour, minute int) {
	time := _calcTime(hours, minutes)
	hour = _getModulated(int(time/minutesPerHour), hoursPerDay)
	minute = _getModulated(minutes, minutesPerHour)
	return hour, minute
}
