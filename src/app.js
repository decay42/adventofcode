import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, '1.txt'), 'utf8')

let sum = 0

for (let i = 0; i < input.length - 1; i++) {
  if (i === input.length - 2) {
    sum += (input[i] === input[0]) ? +input[i] : 0
  } else {
    sum += (input[i] === input[i+1]) ? +input[i] : 0
  }
}

console.log(sum)
