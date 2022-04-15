function ListNode(element, next){
    this.element = element;
    this.next = next;
}

function LinkList () {
    this.head = null;
    this.length = 0;
    //追加
    this.append = (element) => {
        let node = new ListNode(element), current = null;
        if(!this.head) {
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.length++;
    }

    //插入
    this.insert = (position, element) => {
        let node = new ListNode(element);
        let current = this.head, previous = null, index = 0;
        if(position === 0){
            node.next = current;
            this.head = node;
        }else{
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
    }

    this.removeAt = (position) => {
        if(position >= 0 && position <= this.length){
            let current = this.head, previous = null, index = 0
            if(position === 0){
                this.head = current.next
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }else{
            return null;
        }
    }
    //删除
    this.remove = (element) => {
        let previous = null, current = this.head;
        if(current.element === element){
            this.head = current.next;
            this.length--;
            return
        }
        previous = current;
        current = current.next;
        while(current){
            if(current.element === element){
                previous.next = current.next;
                this.length--;
                return
            }else{
                previous = current;
                current = current.next;
            }
        }
    }

    this.isEmpty = () => {
        return this.length == 0;
    }

    // pre    cur     cNext
    //zhap => qian => sun => li
    this.reverseList = () => {
        let previous = null, current = this.head
        while(current){
            let cNext = current.next;
            current.next = previous;
            previous = current;
            current = cNext;
        }
        this.head = previous;
    }
}

const print = (head) => {
    let arr = [];
    while(head){
        arr.push(head.element || head.val);
        head = head.next;
    }
    return arr;
}

var deleteDuplicates = function(head) {
    if(!head) return null;
    let previous = head, current = head;
    //[1,1,2,3,3]
    while(current){
        if(previous.element != current.element){
            previous.next = current;
            previous = previous.next;
        }
        current = current.next;
    }
    previous.next = null
    return head;
};

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
    return p2
}   

var removeNthFromEnd = function(head, n) {
    //[-1, 1, 1, 2, 3, 3]
    let dummy = new ListNode(-1, head);
    let fast = dummy, slow = dummy, index = 0;

    while(index < n){
        fast = fast.next;
        index++;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};

//[1,2,3,4,5,6]
//[1,2,3,4,5]
var middleNode = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

//链表是否含有环
var hasCycle = (head) => {
    let fast = head, slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true
        }
    }
    return false;
}

//计算环的起点
var detectCycle =(head) => {
    let fast = slow = head;
    while(fast && fast.next ){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) break;
    }
    if(fast === null || slow === null){
        return null;
    }

    //找到相遇点 然后从head同步走一圈
    slow = head;
    while(fast !== slow){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
//反转链表
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let lastNode = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return lastNode;
};
//反转链表前 N 个节点
//[1, 2, 3, 4, 5, 6]
//[1, 2, 3, 4, 5, 6]
let after = null;
var reverseN = function(head, n) {
    if(n === 1){
        after = head.next;
        return head;
    }
    let last = reverseN(head.next, n-1);
    head.next.next = head;
    head.next = after;
    return last;
}

var reverseBetween = function(head, m, n){
    if(m === 1){
       return reverseN(head, n);
    }
    head.next = reverseBetween(head.next, m-1, n-1);
    return head;
}

const list = new LinkList();
list.append('zhao');
list.append('qian');
list.append('sun');
list.append('li');
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
console.log(reverseBetween(list.head, 2, 3))