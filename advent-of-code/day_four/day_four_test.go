package day_four_test

import (
	"testing"

	"github.com/zkourouma/advent-of-code/day_four"
)

var expected = 137896

var expectedToo = "501"

func TestPartOne(t *testing.T) {
	observed := day_four.Run()
	if observed != expected {
		t.Fatalf("day_four.Run() = %d, want %d", observed, expected)
	}
}

func TestPartTwo(t *testing.T) {
	observed := day_four.RunToo()
	if observed != expectedToo {
		t.Fatalf("day_four.RunToo() = %d, want %d", observed, expectedToo)
	}
}
