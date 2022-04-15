/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
 * 还有一个 random 指针指向链表中的任意节点或者 null
 */

 /**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null
    let map = new Map()
    let current = head
    while(current){
        map.set(current, new Node(current.val, null, null))
        current = current.next
    }
    current = head
    while(current){
        map.get(current).next = current.next ? map.get(current.next) : null
        map.get(current).random = current.random ? map.get(current.random): null
        current = current.next
    }
    return map.get(head)
};