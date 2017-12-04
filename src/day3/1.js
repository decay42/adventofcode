import Day3 from './Day3'

const day3 = new Day3()
let countValid = 0

for (const line of day3.input) {
  let seen = []
  let valid = true

  for (const phrase of line.split(' ')) {
    if (seen.indexOf(phrase) !== -1) {
      valid = false
      break
    } else {
      seen.push(phrase)
    }
  }

  if (valid === false) {
    continue
  }

  countValid++
}

console.log(`Answer for Day 3, Puzzle 1:\n${countValid}`)
