package day_two_test

import (
	"testing"

	"github.com/zkourouma/advent-of-code/day_two"
)

var expected = []int{7, 6, 7, 9, 2}
var expectedToo = []string{"A", "7", "A", "C", "3"}

func TestPartOne(t *testing.T) {
	observed := day_two.Run()
	for i := range observed {
		if observed[i] != expected[i] {
			t.Fatalf("day_two.Run() = %v, want %v", observed, expected)
		}
	}
}

func TestPartTwo(t *testing.T) {
	observed := day_two.RunToo()
	for i := range observed {
		if observed[i] != expectedToo[i] {
			t.Fatalf("day_two.Run() = %v, want %v", observed, expectedToo)
		}
	}
}
