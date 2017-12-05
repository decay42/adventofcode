import fs from 'fs'
import path from 'path'

export default class {
  constructor (part) {
    this.input = fs
      .readFileSync(
        path.resolve(__dirname, 'input.txt'),
        'utf8'
      )
      .trim()
      .split('\n')
      .map(e => Number(e))

    this.part = part
    this.pointer = 0
  }

  jump (amount) {
    if (this.pointer + amount >= this.input.length) {
      throw new Error('a')
    }
    if (this.part === 1) {
      this.input[this.pointer] += 1
    } else {
      if (this.input[this.pointer] >= 3) {
        this.input[this.pointer] -= 1
      } else {
        this.input[this.pointer] += 1
      }
    }
    this.pointer += amount
  }
}
