class Node {
    constructor() {
        this.data;
        this.left;
        this.right;
    }
}

export default class BinarySearch {
    constructor() {
        this.root;
    }

    containsCheck(value) {

    }

    buildTree(array) {

    }

    includes(value) {

    }

    insert(value) {

    }

    deleteItem(value) {

    }

    levelOrderForEach(callback) {

    }

    inOrderForEach(callback) {

    }

    preOrderForEach(callback) {
        
    }

    postOrderForEach(callback) {
        
    }

    height(value) {

    }

    depth(value) {

    }

    isBalance() {

    }

    rebalance() {
        
    }

    prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null || node === undefined) {
            return;
        }

        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

}