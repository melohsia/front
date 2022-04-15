/**
 * 21. 合并两个有序链表
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

    [1, 2, 4]
                    =>  [1, 1, 2, 3, 4, 4]
    [1, 3, 4]

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(), p = dummy;
    let p1 = list1;
    let p2 = list2;
    while (p1 != null && p2 != null) {
        if(p1.val >= p2.val){
            p.next = p2;
            p2 = p2.next;
        }else{
            p.next = p1;
            p1 = p1.next;
        }
        p = p.next
    }
    if(!p1){
        p.next = p2;
    }else{
        p.next = p1;
    }
    return dummy.next;
};