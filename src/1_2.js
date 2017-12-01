import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, '1_1.txt'), 'utf8').trim()

let sum = 0

const length = input.length
for (let i = 0; i < length; i++) {
  sum += (input[i] === input[(i + (length/2)) % length]) ? +input[i] : 0
}

console.log(`Answer for Day 1, Puzzle 2:\n${sum}`)
