import Day4 from './Day4'

const day4 = new Day4()
let countValid = 0

for (const line of day4.input) {
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
