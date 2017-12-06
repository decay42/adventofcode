export default class {
  constructor () {
    this.input = [0, 5, 10, 0, 11, 14, 13, 4, 11, 8, 8, 7, 1, 4, 12, 11]
  }

  get maxIndex () {
    let max = this.input[0]
    let maxIndex = 0

    for (let i = 0; i < this.input.length; i++) {
      if (this.input[i] > max) {
        max = this.input[i]
        maxIndex = i
      }
    }

    return maxIndex
  }

  balance () {
    let startFrom = this.maxIndex
    let number = this.input[startFrom]

    this.input[startFrom] = 0
    startFrom = (startFrom + 1) % this.input.length

    while (number > 0) {
      this.input[startFrom] += 1
      number -= 1
      startFrom = (startFrom + 1) % this.input.length
    }
  }
}
