import BinarySearch from "./binarySearch.js"

const bs = new BinarySearch();
bs.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

bs.prettyPrint(bs.root)
console.log("Includes (8) is true", bs.includes(8));
console.log("Includes (324) is true", bs.includes(324))
console.log("Includes (5) is true", bs.includes(5))
console.log("Includes (6) is false", bs.includes(6))
