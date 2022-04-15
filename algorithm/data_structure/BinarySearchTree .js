function BinarySearchTree () {
    function Node (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null

    let insertNode = (node, newNode) => {
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right, newNode)
            }
        }
    }

    BinarySearchTree.prototype.insert = (key) => {
        let node = new Node(key)
        if(this.root === null){
            this.root = node
        }else{
            insertNode(this.root, node)
        }
    }

    BinarySearchTree.prototype.invertTree = (root) => {
        if(!root) return null
        let temp = root.left
        root.left = root.right
        root.right = temp
        this.invertTree(root.left)
        this.invertTree(root.right)
        return root
    }

    BinarySearchTree.prototype.preOrderTraverse = (root) => {
        if(!root) return
        let res = []
        preOrder(root, res)
        return res.toString()
    }

    let preOrder = (root, res) => {
        if(!root) return
        res.push(root.key)
        preOrder(root.left, res)
        preOrder(root.right, res)
    }

    BinarySearchTree.prototype.inOrderTraverse = (root) => {
        if(!root) return
        let res = []
        inOrder(root, res)
        return res.toString()
    }

    let inOrder = (root, res) => {
        if(!root) return
        inOrder(root.left, res)
        res.push(root.key)
        inOrder(root.right, res)
    }

    BinarySearchTree.prototype.postOrderTraverse = (root) => {
        if(!root) return
        let res = []
        postOrder(root, res)
        return res.toString()
    }

    let postOrder = (root, res) => {
        if(!root) return
        postOrder(root.left, res)
        postOrder(root.right, res)
        res.push(root.key)
    }

}

let bTree = new BinarySearchTree()
bTree.insert(4)
bTree.insert(2)
bTree.insert(7)
bTree.insert(1)
bTree.insert(3)
bTree.insert(6)
bTree.insert(9)
// console.log('bTree', bTree.invertTree(bTree.root))
// console.log('bTree', bTree.preOrderTraverse(bTree.root))
console.log('bTree', bTree.postOrderTraverse(bTree.root))