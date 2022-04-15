function DNode(element) {
    this.element = element
    this.next = null
    this.previous = null
}

function DList() {
    this.head = new DNode('head')
    this.length = 0
    DList.prototype.append = (element) => {
        let node = new DNode(element)
        let current = this.head
        if(!current.next){
            current.next = node
            node.previous = current
        }else{
            while(current.next){
                current = current.next
            }
            current.next = node
            node.previous = current
        }
        this.length++
    }

    DList.prototype.insert = (position, element) => {
        let node = new DNode(element)
        let current = this.head
        let pre 
        let index = 0
        if(position >= 0 && position <= this.length){
            if(position === 0){
                current.next = node
                node.previous = current
                node.next = current.next.next
                current.next.previous = node
            }else{
                pre = current
                current = current.next
                while(index++ < position){
                    pre = current
                    current = current.next
                }
                pre.next = node
                node.previous = pre
                node.next = current
                current.previous = node
            }
            this.length++
        }else{
            return false
        }
    }
}

let list = new DList()
list.append('zhao')
list.append('qian')
list.append('sun')
list.append('li')
list.insert(1, 'wang')

console.log('list', list)