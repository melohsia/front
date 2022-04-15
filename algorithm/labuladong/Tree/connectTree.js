function PerfectTree () {
    function Node (key) {
        this.key = key
        this.next = null
        this.left = null
        this.right = null
    }
    this.root = null

    this.insert = (key) => {
        let node = new Node(key)
        if(!this.root){
            this.root = node
        }else{
            insertNode(this.root, node)
        }
    }

    let insertNode = (root, newNode) => {
        if(root.key > newNode.key){
            if(!root.left){
                root.left = newNode
            }else{
                insertNode(root.left, newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                insertNode(root.right, newNode)
            }
        }
    }

    this.connect = function(root) {
        if(!root) return null
        connectNode(root.left, root.right)
        return root
    };
    
    var connectNode = function (leftNode, rightNode) {
        if(leftNode === null || rightNode === null) return
        leftNode.next = rightNode
        connectNode(leftNode.left, leftNode.right)
        connectNode(rightNode.left, rightNode.right)
        connectNode(leftNode.right, rightNode.left)
    }

}

let pTree = new PerfectTree()
pTree.insert(4)
pTree.insert(2)
pTree.insert(7)
pTree.insert(1)
pTree.insert(3)
pTree.insert(6)
pTree.insert(9)
pTree.connect(pTree.root)
console.log('pTree', pTree)