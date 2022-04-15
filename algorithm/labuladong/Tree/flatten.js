/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return
    flatten(root.left)
    flatten(root.right)
    
    let leftNode = root.left
    let rightNode = root.right

    root.left = null
    root.right = leftNode

    let current = root
    while(current.right){
        current = current.right
    }
    current.right = rightNode
};

// var connect = (root, leftNode, rightNode) => {
//     if(!root) return
//     connect(leftNode, leftNode.left, leftNode.right)
//     connect(rightNode, rightNode.left, rightNode.right)
//     if(leftNode === null && rightNode === null){
//         return
//     }else{
//         root.right = leftNode
//         leftNode.right = rightNode
//     }
// }