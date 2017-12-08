import Day7 from './Day7'

const day7 = new Day7()

const root = day7.input.filter(e => e.name === 'cqmvs')[0]

let tree = {}
tree[root.name] = {
  weight: root.weight + sumWeight(root.children),
  children: getChildren(root)
}

console.log(tree)

function getChildren (node) {
  if (node.children === undefined) {
    return {}
  }
  let childObject = {}
  for (const child of node.children) {
    let childNode = day7.input.filter(e => e.name === child)[0]
    childObject[childNode.name] = {
      weight: childNode.weight + sumWeight(childNode.children),
      children: getChildren(childNode)
    }
  }
  return childObject
}

function sumWeight (children) {
  let sum = 0
  if (children === undefined) {
    return 0
  }
  for (const child of children) {
    let childNode = day7.input.filter(e => e.name === child)[0]
    sum += childNode.weight + sumWeight(childNode.children)
  }
  return sum
}

//  tree[root.name].children[childNode.name] = {weight: childNode.weight, children: getChildren(childNode)}
