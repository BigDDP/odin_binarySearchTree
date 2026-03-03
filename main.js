import BinarySearch from "./binarySearch.js"

const bs = new BinarySearch();

bs.buildTree([56, 12, 5, 3, 10, 34, 24, 45, 78, 67, 61, 72, 88, 81, 99]);
console.log("New Tree ----> [56, 12, 5, 3, 10, 34, 24, 45, 78, 67, 61, 72, 88, 81, 99]")
console.log(`The Tree ${bs.isBalance() ? "IS" : "IS NOT"} Balanced!`,)
bs.prettyPrint(bs.root)
console.log("Traversal Order of Tree ---->")
console.log("LevelOrder: ", bs.levelOrderForEach(bs.root));
console.log("InOrder: ",bs.inOrderForEach(bs.root));
console.log("PreOrder: ",bs.preOrderForEach(bs.root));
console.log("PostOrder: ",bs.postOrderForEach(bs.root));
console.log("Inserting 10 new values ---->")
bs.insert(7)
bs.insert(8)
bs.insert(9)
bs.insert(11)
bs.insert(14)
bs.insert(29)
bs.insert(38)
bs.insert(52)
bs.insert(64)
bs.insert(90)
console.log(`The Tree ${bs.isBalance() ? "IS" : "IS NOT"} Balanced!`,)
bs.prettyPrint(bs.root)
console.log("Rebalancing Tree ---->", bs.inOrderForEach(bs.root))
bs.rebalance()
console.log(`The Tree ${bs.isBalance() ? "IS" : "IS NOT"} Balanced!`,)
bs.prettyPrint(bs.root)