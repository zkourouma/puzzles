package day_three_test

import (
	"testing"

	"github.com/zkourouma/advent-of-code/day_three"
)

var expected = 862
var expectedToo = 1577

func TestPartOne(t *testing.T) {
	observed := day_three.Run()
	if observed != expected {
		t.Fatalf("day_three.Run() = %d, want %d", observed, expected)
	}
}

func TestPartTwo(t *testing.T) {
	observed := day_three.RunToo()
	if observed != expectedToo {
		t.Fatalf("day_three_two.RunToo() = %d, want %d", observed, expectedToo)
	}
}
