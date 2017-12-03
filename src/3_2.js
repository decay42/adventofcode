import fs from 'fs'
import path from 'path'

const input = 347991
const A141481 = fs
  .readFileSync(
    path.resolve(__dirname, 'b141481.txt'), // https://oeis.org/A141481/b141481.txt stored locally and trimmed non-usefuly lines
    'utf8'
  ).trim().split('\n')

for (const row of A141481) {
  var result = +/\d+ (\d+)/.exec(row)[1]
  if (result > input) {
    break
  }
}

console.log(`Answer for Day 3, Puzzle 2:\n${result}`)
