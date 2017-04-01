package day_four

import (
	"bufio"
	"bytes"
	"os"
	"regexp"
	"sort"
	"strconv"
	"strings"
)

// const INPUT_TXT = "/Users/zack/go/mine/src/github.com/zkourouma/advent-of-code/day_four_input.txt"
const INPUT_TXT = "/Users/zack/workspace/personal/advent-of-code/input/day_four_input.txt"

const alphabet = "abcdefghijklmnopqrstuvwxyz"

type Pair struct {
	Key   string
	Value int
}

// A slice of Pairs that implements sort.Interface to sort by Value.
type PairList []Pair

func (p PairList) Swap(i, j int) { p[i], p[j] = p[j], p[i] }
func (p PairList) Len() int      { return len(p) }
func (p PairList) Less(i, j int) bool {
	if p[i].Value == p[j].Value {
		return strings.Compare(p[i].Key, p[j].Key) < 0
	}
	return p[i].Value > p[j].Value
}

func sortMapByValue(m map[string]int) PairList {
	p := make(PairList, len(m))
	for k, v := range m {
		p = append(p, Pair{k, v})
	}
	sort.Sort(p)
	return p
}

func readMap(m PairList, limit int) string {
	var buffer bytes.Buffer
	for i, pair := range m {
		buffer.WriteString(pair.Key)
		if i == limit {
			break
		}
	}
	return buffer.String()
}

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

func Run() int {
	var frequencies map[string]int

	data := parseFile()
	nameRe := regexp.MustCompile("[a-z\\-]+")
	idRe := regexp.MustCompile("\\d+")
	idSum := 0

	for _, code := range data {
		frequencies = make(map[string]int, len(data))
		id := idRe.FindAllString(code, 1)[0]

		matches := nameRe.FindAllString(code, -1)
		encoded, checksum := matches[0], matches[1]

		for _, byteString := range encoded {
			letter := string(byteString)
			if letter == "-" {
				continue
			}

			if _, ok := frequencies[letter]; ok {
				frequencies[letter]++
			} else {
				frequencies[letter] = 1
			}
		}

		topFive := readMap(sortMapByValue(frequencies), 4)

		if topFive == checksum {
			intId, _ := strconv.Atoi(id)
			idSum += intId
		}
	}
	return idSum
}

func shiftChar(i int) string {
	return alphabet[i-1 : i]
}

// north pole object storage
func RunToo() string {
	var frequencies map[string]int
	var newCode string

	data := parseFile()
	nameRe := regexp.MustCompile("[a-z\\-]+")
	idRe := regexp.MustCompile("\\d+")

	for _, code := range data {
		frequencies = make(map[string]int, len(data))
		id := idRe.FindAllString(code, 1)[0]

		matches := nameRe.FindAllString(code, -1)
		encoded, checksum := matches[0], matches[1]

		for _, byteString := range encoded {
			letter := string(byteString)
			if letter == "-" {
				continue
			}

			if _, ok := frequencies[letter]; ok {
				frequencies[letter]++
			} else {
				frequencies[letter] = 1
			}
		}

		topFive := readMap(sortMapByValue(frequencies), 4)

		if topFive == checksum {
			intid, _ := strconv.Atoi(id)
			newCode = ""

			for _, byteString := range encoded {
				idx := strings.Index(alphabet, string(byteString))
				if idx < 0 {
					newCode += string(byteString)
				} else {
					newCode += shiftChar(((idx + intid) % 26) + 1)
				}
			}

			if strings.Index(newCode, "north") > -1 {
				return id
			}
		}
	}
	return ""
}
