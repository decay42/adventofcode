import Day3 from './Day3'
import Combinatorics from 'js-combinatorics'

const day3 = new Day3()
let countValid = 0

for (const line of day3.input) {
  let seen = []
  let valid = true

  for (const phrase of line.split(' ')) {
    const perms = Combinatorics.permutation(phrase.split(''))

    for (const perm of perms.toArray()) {
      if (seen.indexOf(perm.join('')) !== -1) {
        valid = false
        break
      }
    }

    if (!valid) {
      break
    } else {
      seen.push(phrase)
    }
  }

  if (!valid) {
    continue
  }

  countValid++
}

console.log(`Answer for Day 3, Puzzle 2:\n${countValid}`)
