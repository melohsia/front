/**
 * 循环列表在单链表的基础上，将尾结点的指针指向头结点，就形成了循环列表
 */
function CircularLinkedList () {
    let Node = function (element) {
        this.element = element
        this.next = null
    }
    this.length = 0
    this.head = null

    this.append = (element) => {
        let node = new Node(element), current
        if(!this.head){
            this.head = node
            node.next = this.head
        }else{
            current = this.head
            while(current.next !== this.head){
                current = current.next
            }
            current.next = node
            node.next = this.head
        }
        this.length++
        return true
    }

    this.findLast = () => {
        let current = this.head
        while(current.next !== this.head){
            current = current.next
        }
        return current
    }

    this.insert = (position, element) => {
        let previous, index = 0, current = this.head
        if(position > -1 && position < this.length){
            let node = new Node(element)
            let lastNode = this.findLast()
            //头插
            if(position === 0){
                lastNode.next = node
                node.next = current
                this.head = node
                //尾插
            }else if(position === this.length - 1){
                lastNode.next = node
                node.next = this.head
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            this.length++
            return true
        }else{
            return false
        }
    }
}

let CNode = new CircularLinkedList()
CNode.append('zhao')
CNode.append('qian')
CNode.append('sun')
CNode.append('li')
console.log('CNode', CNode)
// console.log(CNode.findLast())
