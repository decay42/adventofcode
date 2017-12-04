import fs from 'fs'
import path from 'path'

export default class {
  constructor () {
    this.input = fs
      .readFileSync(
        path.resolve(__dirname, 'input.txt'),
        'utf8'
      )
      .trim()
      .split('\n')
  }

  * permute (permutation) { // https://stackoverflow.com/a/37580979/5307891
    const length = permutation.length
    let c = Array(length).fill(0)
    let i = 1
    let k, p

    yield permutation.slice()
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i]
        p = permutation[i]
        permutation[i] = permutation[k]
        permutation[k] = p
        ++c[i]
        i = 1
        yield permutation.slice()
      } else {
        c[i] = 0
        ++i
      }
    }
  }
}
