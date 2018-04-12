package day_one_test

import (
	"testing"

	"github.com/zkourouma/advent-of-code/day_one"
)

const expected = 262
const expectedToo = 131

func TestPartOne(t *testing.T) {
	observed := day_one.Run()
	if observed != expected {
		t.Fatalf("day_one.Run() = %d, want %d", observed, expected)
	}
}

func TestPartTwo(t *testing.T) {
	observed := day_one.RunToo()
	if observed != expectedToo {
		t.Fatalf("day_one.RunToo() = %d, want %d", observed, expectedToo)
	}
}
