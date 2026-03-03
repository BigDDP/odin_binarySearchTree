import BinarySearch from "./binarySearch.js"

const bs = new BinarySearch();
bs.buildTree([12, 45, 78, 3, 99, 24, 67, 81, 56, 10, 34, 72, 5, 88, 61])

// bs.prettyPrint(bs.root)
// console.log("2. Includes (8) is true", bs.includes(8));
// console.log("2. Includes (324) is true", bs.includes(324))
// console.log("2. Includes (6) is false", bs.includes(6))

bs.insert(43)
bs.insert(2)
bs.insert(7)
bs.prettyPrint(bs.root)
console.log("----------- BREAK -----------")

console.log("LevelOrder: ", bs.levelOrderForEach(bs.root));
console.log("InOrder: ",bs.inOrderForEach(bs.root));
console.log("PreOrder: ",bs.preOrderForEach(bs.root));
console.log("PostOrder: ",bs.postOrderForEach(bs.root));

console.log("Height of 99: ",bs.height(99))
console.log("Depth of 99:",bs.depth(99))
console.log("Height of 99: ",bs.height(45))
console.log("Depth of 99:",bs.depth(45))

console.log(`The Tree ${bs.isBalance() ? "IS" : "IS NOT"} Balanced!`,)

bs.rebalance()
bs.prettyPrint(bs.root)
console.log(`The Tree ${bs.isBalance() ? "IS" : "IS NOT"} Balanced!`,)
