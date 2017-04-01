package main

import (
	"fmt"

	"github.com/zkourouma/advent-of-code/day_four"
	"github.com/zkourouma/advent-of-code/day_one"
	"github.com/zkourouma/advent-of-code/day_three"
	"github.com/zkourouma/advent-of-code/day_two"
)

func main() {
	fmt.Println("day_one", day_one.Run())
	fmt.Println("day_one part two", day_one.RunToo())
	fmt.Println("day_two", day_two.Run())
	fmt.Println("day_two part two", day_two.RunToo())
	fmt.Println("day_three", day_three.Run())
	fmt.Println("day_three part two", day_three.RunToo())
	fmt.Println("day_four", day_four.Run())
	fmt.Println("day_four", day_four.RunToo())
}
