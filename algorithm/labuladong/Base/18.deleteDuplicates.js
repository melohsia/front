/**
 * 83. 删除排序链表中的重复元素
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

示例 1：
输入：head = [1,1,2]
输出：[1,2]

示例 2：
输入：head = [1,1,2,3,3]
输出：[1,2,3]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;
    let previous = head, current = head;
    while(current){
        if(previous.val != current.val){
            previous.next = current;
            previous = previous.next;
        }
        current = current.next;
    }
    previous.next = null
    return head;
};

// const list = new LinkList()
// list.append(1);
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(3);
// console.log(deleteDuplicates(list.head))