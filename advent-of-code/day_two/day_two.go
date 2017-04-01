package day_two

import (
	"bufio"
	"math"
	"os"
)

// const INPUT_TXT = "/Users/zack/go/mine/src/github.com/zkourouma/advent-of-code/day_two_input.txt"
const INPUT_TXT = "/Users/zack/workspace/personal/advent-of-code/input/day_two_input.txt"

func parseFile() []string {
	file, _ := os.Open(INPUT_TXT)
	defer file.Close()
	scanner := bufio.NewScanner(file)

	data := make([]string, 0)

	for scanner.Scan() {
		data = append(data, scanner.Text())
	}
	return data
}

func Run() []int {
	data := parseFile()
	baseKeypad := [][]int{[]int{1, 2, 3}, []int{4, 5, 6}, []int{7, 8, 9}}
	password := make([]int, 0)

	var string_move string

	x, y := 1.0, 1.0

	for _, sequence := range data {
		for _, byte_move := range sequence {
			string_move = string(byte_move)
			switch string_move {
			case "L":
				x = math.Max(0, math.Min(2, float64(x-1)))
			case "R":
				x = math.Max(0, math.Min(2, float64(x+1)))
			case "U":
				y = math.Max(0, math.Min(2, float64(y-1)))
			case "D":
				y = math.Max(0, math.Min(2, float64(y+1)))
			}
		}
		password = append(password, baseKeypad[int(y)][int(x)])
	}
	return password
}

func RunToo() []string {
	data := parseFile()
	baseKeypad := [][]string{[]string{"", "", "1", "", ""}, []string{"", "2", "3", "4", ""}, []string{"5", "6", "7", "8", "9"}, []string{"", "A", "B", "C", ""}, []string{"", "", "D", "", ""}}
	password := make([]string, 0)

	var string_move string
	var tmp_x, tmp_y float64

	x, y := 0.0, 2.0

	for _, sequence := range data {
		for _, byte_move := range sequence {
			string_move = string(byte_move)
			switch string_move {
			case "L":
				tmp_x = math.Max(0, math.Min(4, float64(x-1)))
				if baseKeypad[int(y)][int(tmp_x)] != "" {
					x = tmp_x
				}
			case "R":
				tmp_x = math.Max(0, math.Min(4, float64(x+1)))
				if baseKeypad[int(y)][int(tmp_x)] != "" {
					x = tmp_x
				}
			case "U":
				tmp_y = math.Max(0, math.Min(4, float64(y-1)))
				if baseKeypad[int(tmp_y)][int(x)] != "" {
					y = tmp_y
				}
			case "D":
				tmp_y = math.Max(0, math.Min(4, float64(y+1)))
				if baseKeypad[int(tmp_y)][int(x)] != "" {
					y = tmp_y
				}
			}
		}
		password = append(password, baseKeypad[int(y)][int(x)])
	}
	return password
}
