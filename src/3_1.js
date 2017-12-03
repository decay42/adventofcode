const input = 347991

function * oddSquares () {
  let n = 1
  while (true) {
    yield { base: n, number: n * n }
    n += 2
  }
}

const oddS = oddSquares()

let prev = oddS.next().value // 1
let next = oddS.next().value // 9
while (next.number <= input) {
  prev = next
  next = oddS.next().value
}

const distance = input - prev.number
const manhattan = distance % (prev.base + 1)

console.log(`Answer for Day 3, Puzzle 1:\n${manhattan}`)
