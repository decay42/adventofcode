import Day6 from './Day6'

const day6 = new Day6()

let seenConfig = []

while (seenConfig.indexOf(day6.input.join(',')) === -1) {
  seenConfig.push(day6.input.join(','))
  day6.balance()
}

console.log(`Part 1: ${seenConfig.length}, Part 2: ${seenConfig.length - seenConfig.indexOf(day6.input.join(','))}`)
