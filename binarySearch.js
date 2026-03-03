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
        
        function loopBuild(i, currentNode) {
            if (i >= array.length) return;

            let nextNode = new Node();
            nextNode.data = array[i]
            
            if (array[i] > currentNode.data) {
                if (currentNode.right) {
                    loopBuild(i, currentNode.right)
                } else {
                    currentNode.right = nextNode
                    loopBuild(++i, root);
                };
            } else {
                if (currentNode.left) {
                    loopBuild(i, currentNode.left)
                } else {
                    currentNode.left = nextNode
                    loopBuild(++i, root);
                };
            };
        };

        loopBuild(1,root);
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
        let newNode = new Node()
        newNode.data = value;
        loopNode(this.root, newNode)

        function loopNode(node, vNode) {
            if (node.data === vNode.data) {
                return console.log(vNode.data, "is a duplicate, process terminated");
            } else  {
                if (node.data > vNode.data) {
                    if (!node.left) {
                        node.left = vNode
                    } else {
                        loopNode(node.left, vNode);
                    }
                } else {
                    if (!node.right) {
                        node.right = vNode
                    } else {
                        loopNode(node.right, vNode);
                    }
                }
            }
        }
    }

    deleteItem(value) {
        function loopNode(parent, node) {
            if (!node) return null;
            if (node.data === value) return [parent, node];
            if (node.data > value) return loopNode(node, node.left);
            return loopNode(node, node.right);
        }

        const removeNode = loopNode(null, this.root);
        if (!removeNode) return;

        const [pN, rN] = removeNode;

        console.log("Parent of RN: ", pN)
        console.log("RN: ", rN)

        function loopNode2(parent, node) {
            if (!node.left && !node.right) {
                return [parent,node];
            } else {
                if (rN.data > node.data) {
                    if (node.right) {
                        return loopNode2(node, node.right)
                    } else {
                        return loopNode2(node, node.left)
                    }
                } else {
                    if (node.left) {
                        return loopNode2(node, node.left)
                    } else {
                        return loopNode2(node, node.right)
                    }
                }
            }
        }      

        if (!rN.left && !rN.right) {
            if (!pN) {
                this.root = null;
            } else if (pN.left === rN) { 
                pN.left = null
            } else {
                pN.right = null
            };

            return;
        }

        let [succParent, succ] = rN.right 
            ? loopNode2(rN, rN.right) 
            : loopNode2(rN, rN.left);

        rN.data = succ.data;

        if (succParent.left === succ) {
            succParent.left = succ.right ?? null
        } else {
            succParent.right = succ.right ?? null
        };   
    };
    

    levelOrderForEach(callback) {
        if (!callback) return [];

        const order = [];
        const queue = [callback];

        while (queue.length > 0) {
            const node = queue.shift(); 
            order.push(node.data);     

            if (node.left)  queue.push(node.left); 
            if (node.right) queue.push(node.right); 
        }

        return order;
    }

    inOrderForEach(callback, order = []) { 
        if (!callback) return; 

        this.inOrderForEach(callback.left, order); 
        order.push(callback.data); 
        this.inOrderForEach(callback.right, order); 

        return order;
    }

    preOrderForEach(callback,  order = []) { 
        if (!callback) return; 
        
        order.push(callback.data); 
        this.preOrderForEach(callback.left, order); 
        this.preOrderForEach(callback.right, order);

        return order;
    }

    postOrderForEach(callback,  order = []) { 
        if (!callback) return; 
        
        this.postOrderForEach(callback.left, order); 
        this.postOrderForEach(callback.right, order); 
        order.push((callback.data)); 

        return order;
    }

    height(value) {
        function loopNode(node) {
            if (!node) return null;
            if (node.data === value) return node;
            if (node.data > value) return loopNode(node.left);
            return loopNode(node.right);
        }

        function getHeight(node) {
            if (!node) return -1;
            let lHeight = getHeight(node.left);
            let rHeight = getHeight(node.right);
            return Math.max(lHeight, rHeight) + 1;
        }

        const node = loopNode(this.root);
        return node ? getHeight(node) : -1;
    }

    depth(value) {
        let node = this.root;
        let d = 0;

        while (node) {
            if (node.data === value) return d;
            node = value < node.data ? node.left : node.right;
            d++;
        }

        return -1;
        }

    isBalance() {
        function checkHeight(node) {
            if (!node) return -1;

            let lHeight = checkHeight(node.left);
            if (lHeight === -2) return -2;

            let rHeight = checkHeight(node.right);
            if (rHeight === -2) return -2;
    
            if (lHeight - rHeight > 1 || rHeight - lHeight > 1) return -2;

            return Math.max(lHeight, rHeight) + 1
        }

        return checkHeight(this.root) !== -2;
    }

    rebalance() {
        const inorder = this.inOrderForEach(this.root)

        function reorderList(currentArr, newArr = []) {
            let currLength = currentArr.length;

            if (currLength < 3) {
                if (currentArr[0]) newArr.push(currentArr[0])
                if (currentArr[1]) newArr.push(currentArr[1])
            } else {
                let split = Math.floor(currLength / 2);
                newArr.push(currentArr[split]);

                reorderList(currentArr.slice(0,split), newArr);
                reorderList(currentArr.slice(split+1,currLength), newArr);
            }
            
            return newArr;
        }
        
        this.buildTree(reorderList(inorder));
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