import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, '1.txt'), 'utf8').trim()

let sum = 0

for (let i = 0; i < input.length; i++) {
  sum += (input[i] === input[(i + 1) % input.length]) ? +input[i] : 0
}

console.log(`Answer for Day 1, Puzzle 1:\n${sum}`)
