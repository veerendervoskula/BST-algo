class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new TreeNode(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new TreeNode(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new TreeNode(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
}

const maxDepthOfTree = (arr) => {
    const bst = new BinaryTree();
    for (let i = 0; i < arr.length; i++) {
        bst.add(arr[i])
    }
    return bst.findMaxHeight();
}

module.exports = maxDepthOfTree;

