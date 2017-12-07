import Input from '../Input'

export default class extends Input {
  constructor () {
    super('day7').splitLines()

    this.input = this.input
      .map(row => this.parseRow(row))
      .sort((a, b) => a.weight - b.weight)
  }

  parseRow (row) {
    let [, name, weight, children] = /([a-z]+)\s\((\d+)\)(?: -> )?(.+)?/.exec(row)
    return {
      name,
      weight: +weight,
      children: children ? children.split(/, /) : undefined}
  }
}
