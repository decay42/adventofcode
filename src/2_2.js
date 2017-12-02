import fs from 'fs'
import path from 'path'

const spreadsheet = fs.readFileSync(path.resolve(__dirname, '2_1.txt'), 'utf8').trim().split('\n')

let result = 0

for (let i = 0, l = spreadsheet.length; i < l; i++) {
  let row = spreadsheet[i]
    .split('\t')
    .map(e => Number(e))
    .sort((a, b) => b - a)

  for (let j = 0, l = row.length; j < l; j++) {
    for (let k = j + 1; k < l; k++) {
      if (row[j] % row[k] === 0) {
        result += row[j] / row[k]
      }
    }
  }
}
console.log(`Answer for Day 2, Puzzle 2:\n${result}`)
