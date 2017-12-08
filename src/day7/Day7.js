import Input from '../Input'

export default class extends Input {
  constructor () {
    super('day7').splitLines()

    this.input = this.input
      .map(row => this.parseRow(row))
  }

  parseRow (row) {
    let [, name, weight, children] = /([a-z]+)\s\((\d+)\)(?: -> )?(.+)?/.exec(row)
    return {
      name,
      weight: +weight,
      children: children ? children.split(/, /) : undefined}
  }

  get leafs () {
    return this.input.filter(e => e.children === undefined)
  }

  findParent (child) {
    return this.input.filter(e => e.children ? e.children.indexOf(child) !== -1 : false)
  }
}
