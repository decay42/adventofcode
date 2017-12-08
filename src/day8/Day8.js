import Input from '../Input'

export default class extends Input {
  constructor () {
    super('day8').splitLines()

    this.input = this.input
      .map(row => this.parseRow(row))

    this.registers = {}
  }

  parseRow (row) {
    let [, register, operation, amount, condRegister, condOperator, condAmount] = /([a-z]+) (inc|dec) (-?\d+) if ([a-z]+) ([<>=!]+) (-?\d+)/.exec(row)
    return {
      register,
      operation,
      amount: +amount,
      condRegister,
      condOperator,
      condAmount: +condAmount
    }
  }
}
