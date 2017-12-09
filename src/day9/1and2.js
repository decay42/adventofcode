import Day9 from './Day9'

const day9 = new Day9()

let state = {
  ignoreNext: false,
  garbage: false,
  group: 0
}

let result = {
  score: 0,
  garbageChars: 0
}

for (const char of day9.input[0]) {
  if (state.ignoreNext) {
    state.ignoreNext = false
    continue
  }

  if (state.garbage) {
    if (char === '!') {
      state.ignoreNext = true
      continue
    } else if (char === '>') {
      state.garbage = false
      continue
    }
    result.garbageChars++
  } else {
    if (char === '<') {
      state.garbage = true
    } else if (char === '{') {
      state.group++
    } else if (char === '}') {
      result.score += state.group
      state.group = Math.max(0, state.group - 1)
    }
  }
}

console.log(result)
