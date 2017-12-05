import Day5 from './Day5'

const day5 = new Day5(1)

let steps = 0

while (true) {
  try {
    steps++
    day5.jump(day5.input[day5.pointer])
  } catch (err) {
    console.log(steps)
    break
  }
}
