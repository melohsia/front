//找到链表的倒数第K个值
var findFromEnd = function(head, k) {
    let p1 = head, p2 = head, index = 0;
    while(index++ < k){
        p1 = p1.next;
    }
    while(p1){
        p2 = p2.next;
        p1 = p1.next;
    }
    return p2.element
}   