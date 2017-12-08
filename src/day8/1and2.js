import Day8 from './Day8'

const day8 = new Day8()

let globalMax = 0

for (const row of day8.input) {
  let condition = false

  day8.registers[row.condRegister] = day8.registers[row.condRegister] || 0
  day8.registers[row.register] = day8.registers[row.register] || 0

  switch (row.condOperator) {
    case '<':
      condition = day8.registers[row.condRegister] < row.condAmount
      break
    case '<=':
      condition = day8.registers[row.condRegister] <= row.condAmount
      break
    case '>':
      condition = day8.registers[row.condRegister] > row.condAmount
      break
    case '>=':
      condition = day8.registers[row.condRegister] >= row.condAmount
      break
    case '==':
      condition = day8.registers[row.condRegister] === row.condAmount
      break
    case '!=':
      condition = day8.registers[row.condRegister] !== row.condAmount
      break
  }
  if (condition) {
    if (row.operation === 'inc') {
      day8.registers[row.register] += row.amount
    } else if (row.operation === 'dec') {
      day8.registers[row.register] -= row.amount
    }
    if (day8.registers[row.register] > globalMax) {
      globalMax = day8.registers[row.register]
    }
  }
}

const maxRegister = Object.keys(day8.registers).sort((a, b) => day8.registers[b] - day8.registers[a])[0]
console.log(`End max: ${maxRegister} = ${day8.registers[maxRegister]}, Global max: ${globalMax}`)
