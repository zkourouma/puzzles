package day_three

import (
	"bufio"
	"os"
	"regexp"
	"strconv"
)

// const INPUT_TXT = "/Users/zack/go/mine/src/github.com/zkourouma/advent-of-code/day_three_input.txt"
const INPUT_TXT = "/Users/zack/workspace/personal/advent-of-code/input/day_three_input.txt"

func parseFile() [][]float64 {
	file, _ := os.Open(INPUT_TXT)
	defer file.Close()
	scanner := bufio.NewScanner(file)

	data := make([][]float64, 0)
	re := regexp.MustCompile("\\d+")

	for scanner.Scan() {
		tmpLine := make([]float64, 0)
		matched := re.FindAllString(scanner.Text(), -1)
		for _, strD := range matched {
			i, _ := strconv.ParseFloat(strD, 64)
			tmpLine = append(tmpLine, i)
		}
		data = append(data, tmpLine)
	}
	return data
}

func Run() int {
	var a, b, c float64

	data := parseFile()
	num_triangles := 0

	for _, triangle := range data {
		a, b, c = triangle[0], triangle[1], triangle[2]

		if ((a + b) > c) && ((a + c) > b) && ((b + c) > a) {
			num_triangles += 1
		}
	}
	return num_triangles

}

func RunToo() int {
	var a, b, c float64

	data := parseFile()
	num_triangles := 0

	for i := 1; i < (len(data) - 1); i += 3 {
		for j := 0; j < 3; j++ {
			a, b, c = data[i-1][j], data[i][j], data[i+1][j]

			if ((a + b) > c) && ((a + c) > b) && ((b + c) > a) {
				num_triangles += 1
			}
		}
	}
	return num_triangles
}
