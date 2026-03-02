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

    buildTree(a) {
        let array = [...new Set(a)] // Enforce Unique Items, but keep array indexing.
        let root = new Node();
        root.data = array[0];
        this.root = root;
        
        function loopNode(i, currentNode) {
            if (i >= array.length) return;

            let nextNode = new Node();
            nextNode.data = array[i]
            
            if (array[i] > currentNode.data) {
                if (currentNode.right) {
                    loopNode(i, currentNode.right)
                } else {
                    currentNode.right = nextNode
                    loopNode(++i, root);
                };
            } else {
                if (currentNode.left) {
                    loopNode(i, currentNode.left)
                } else {
                    currentNode.left = nextNode
                    loopNode(++i, root);
                };
            };
        };

        loopNode(1,root);
    }

    includes(value) {
        function loopNode(node, v) {
            if (node.data === v) {
                return true;
            } else  {
                if (node.data > v) {
                    if (!node.left) return;
                    return loopNode(node.left, v);
                } else {
                    if (!node.right) return;
                    return loopNode(node.right, v);
                }
            }
        }
        let rV = loopNode(this.root,value)
        return !rV ? false : rV
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

        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

}