import BinarySearch from "./binarySearch.js"

const bs = new BinarySearch();
bs.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

// bs.prettyPrint(bs.root)
// console.log("2. Includes (8) is true", bs.includes(8));
// console.log("2. Includes (324) is true", bs.includes(324))
// console.log("2. Includes (6) is false", bs.includes(6))

bs.insert(43)
bs.insert(2)
bs.insert(7)
bs.prettyPrint(bs.root)
console.log("----------- BREAK -----------")
// bs.deleteItem(2)
// bs.deleteItem(1)
// bs.deleteItem(8)
// bs.deleteItem(67)
// bs.deleteItem(7)
// bs.prettyPrint(bs.root)
// console.log("----------- BREAK 2 -----------")

console.log("LevelOrder: ", bs.levelOrderForEach(bs.root));
console.log("InOrder: ",bs.inOrderForEach(bs.root));
console.log("PreOrder: ",bs.preOrderForEach(bs.root));
console.log("PostOrder: ",bs.postOrderForEach(bs.root));
