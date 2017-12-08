import Day7 from './Day7'

const day7 = new Day7()

let x = day7.leafs[0].name
let y
while (true) {
  y = x
  x = day7.findParent(x)
  console.log(x)
  if (x.length) {
    x = x[0].name
  } else {
    break
  }
}

console.log(y)
