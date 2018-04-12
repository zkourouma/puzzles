package day_one

import (
	"io/ioutil"
	"strconv"
	"strings"
)

type point struct {
	x, y int
}

// const INPUT_TXT = "/Users/zack/go/mine/src/github.com/zkourouma/advent-of-code/day_one_input.txt"
const INPUT_TXT = "/Users/zack/workspace/personal/advent-of-code/input/day_one_input.txt"

func parseFile() []string {
	contents, _ := ioutil.ReadFile(INPUT_TXT)
	return strings.Split(strings.TrimSpace(string(contents)), ", ")
}

func stepsNorth(x, y, steps int, seen []*point) ([]*point, bool) {
	var visited []*point
	var dX, dY int

	for i := 1; i <= steps; i++ {
		dX, dY = x, y+i

		for _, stop := range seen {
			if stop.x == dX && stop.y == dY {
				return append(visited, &point{dX, dY}), true
			}
		}
		visited = append(visited, &point{dX, dY})
	}
	return visited, false
}

func stepsEast(x, y, steps int, seen []*point) ([]*point, bool) {
	var visited []*point
	var dX, dY int

	for i := 1; i <= steps; i++ {
		dX, dY = x+i, y

		for _, stop := range seen {
			if stop.x == dX && stop.y == dY {
				return append(visited, &point{dX, dY}), true
			}
		}
		visited = append(visited, &point{dX, dY})
	}
	return visited, false
}

func stepsSouth(x, y, steps int, seen []*point) ([]*point, bool) {
	var visited []*point
	var dX, dY int

	for i := 1; i <= steps; i++ {
		dX, dY = x, y-i

		for _, stop := range seen {
			if stop.x == dX && stop.y == dY {
				return append(visited, &point{dX, dY}), true
			}
		}
		visited = append(visited, &point{dX, dY})
	}
	return visited, false
}

func stepsWest(x, y, steps int, seen []*point) ([]*point, bool) {
	var visited []*point
	var dX, dY int

	for i := 1; i <= steps; i++ {
		dX, dY = x-i, y

		for _, stop := range seen {
			if stop.x == dX && stop.y == dY {
				return append(visited, &point{dX, dY}), true
			}
		}
		visited = append(visited, &point{dX, dY})
	}
	return visited, false
}

func makeTurn(x int, y int, direction string, steps int, towards string) (int, int, string) {
	switch direction {
	case "north":
		switch towards {
		case "L":
			x = x - steps
			direction = "west"
		case "R":
			x = x + steps
			direction = "east"
		}
	case "east":
		switch towards {
		case "L":
			y = y + steps
			direction = "north"
		case "R":
			y = y - steps
			direction = "south"
		}
	case "south":
		switch towards {
		case "L":
			x = x + steps
			direction = "east"
		case "R":
			x = x - steps
			direction = "west"
		}
	case "west":
		switch towards {
		case "L":
			y = y - steps
			direction = "south"
		case "R":
			y = y + steps
			direction = "north"
		}
	}
	return x, y, direction
}

func makeTurnToo(x int, y int, direction string, steps int, towards string, seen []*point) (int, int, string, []*point, bool) {
	switch direction {
	case "north":
		switch towards {
		case "L":
			visited, done := stepsWest(x, y, steps, seen)
			return x - steps, y, "west", visited, done
		case "R":
			visited, done := stepsEast(x, y, steps, seen)
			return x + steps, y, "east", visited, done
		}
	case "east":
		switch towards {
		case "L":
			visited, done := stepsNorth(x, y, steps, seen)
			return x, y + steps, "north", visited, done
		case "R":
			visited, done := stepsSouth(x, y, steps, seen)
			return x, y - steps, "south", visited, done
		}
	case "south":
		switch towards {
		case "L":
			visited, done := stepsEast(x, y, steps, seen)
			return x + steps, y, "east", visited, done
		case "R":
			visited, done := stepsWest(x, y, steps, seen)
			return x - steps, y, "west", visited, done
		}
	case "west":
		switch towards {
		case "L":
			visited, done := stepsSouth(x, y, steps, seen)
			return x, y - steps, "south", visited, done
		case "R":
			visited, done := stepsNorth(x, y, steps, seen)
			return x, y + steps, "north", visited, done
		}
	}
	return x, y, direction, make([]*point, 0), false
}

func Run() int {
	data := parseFile()

	location := point{0, 0}
	direction := "north"

	for _, datum := range data {
		towards := string([]rune(datum)[0])
		steps, _ := strconv.Atoi(string([]rune(datum)[1:]))
		location.x, location.y, direction = makeTurn(location.x, location.y, direction, steps, towards)
	}
	x, y := location.x, location.y
	if x < 0 {
		x = -x
	}
	if y < 0 {
		y = -y
	}
	return x + y
}

func RunToo() int {
	var visited []*point
	var newlyVisited []*point
	var done bool

	data := parseFile()

	location := point{0, 0}
	visited = append(visited, &location)
	direction := "north"

	for _, datum := range data {
		towards := string([]rune(datum)[0])
		steps, _ := strconv.Atoi(string([]rune(datum)[1:]))
		location.x, location.y, direction, newlyVisited, done = makeTurnToo(location.x, location.y, direction, steps, towards, visited)
		visited = append(visited, newlyVisited...)
		if done {
			twice := visited[len(visited)-1]
			x, y := twice.x, twice.y
			if x < 0 {
				x = -x
			}
			if y < 0 {
				y = -y
			}
			return x + y
		}

	}
	return 0
}
