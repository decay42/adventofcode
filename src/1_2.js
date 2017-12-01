import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, '1_1.txt'), 'utf8').trim()

let sum = 0

for (let i = 0, length = input.length; i < length; i++) {
  const curr = +input[i]
  const nextIndex = (i + (length / 2)) % length
  const next = +input[nextIndex]

  if (curr === next) {
    sum += curr
  }
}

console.log(`Answer for Day 1, Puzzle 2:\n${sum}`)
