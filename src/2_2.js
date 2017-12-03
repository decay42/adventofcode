import fs from 'fs'
import path from 'path'

const spreadsheet = fs.readFileSync(path.resolve(__dirname, '2.txt'), 'utf8').trim().split('\n')

let result = 0

for (let row of spreadsheet) {
  row = row
    .split('\t')
    .map(e => Number(e))
    .sort((a, b) => a - b)

  for (let j = 0, l = row.length; j < l; j++) {
    for (let k = j + 1; k < l; k++) {
      if (row[j] % row[k] === 0) {
        result += row[j] / row[k]
      }
    }
  }
}

console.log(`Answer for Day 2, Puzzle 2:\n${result}`)
