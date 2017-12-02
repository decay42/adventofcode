import fs from 'fs'
import path from 'path'

const spreadsheet = fs.readFileSync(path.resolve(__dirname, '2_1.txt'), 'utf8').trim().split('\n')

let checksum = 0

for (let row of spreadsheet) {
  row = row
    .split('\t')
    .map(e => Number(e))
    .sort((a, b) => a - b)

  console.log(row.join(';'), row[0], row[row.length - 1])
  checksum += Math.abs(row[0] - row[row.length - 1])
}

console.log(`Answer for Day 2, Puzzle 1:\n${checksum}`)
