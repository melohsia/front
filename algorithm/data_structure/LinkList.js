//element上存放的是该节点上的数据，next存放的是下一个节点的链接
function linkedNode(element){
    this.element = element
    this.next = null
}

//创建一个List类
function List(){
    this.head = null
    this.length = 0
    //追加
    this.append = (element) => {
        let node = new linkedNode(element), current
        if(!this.head){
            this.head = node
        }else{
            current = this.head
            while(current.next){
                //逐渐向后转移
                current = current.next
            }
            current.next = node
        }
        this.length++
        return true
    }
    //插入
    this.insert = (position, element) => {
        if(position >= 0 && position <= this.length){
            let node = new linkedNode(element),
            current = this.head,
            previous,
            index = 0
            if(position === 0){
                node.next = current
                this.head = node
            }else{
                while(index++ < position){
                    previous = current
                    //逐渐向后转移
                    current = current.next
                }
                node.next = current 
                previous.next = node
            }
            this.length++
            return true
        }else{
            return false
        }
    }
    //删除
    this.removeAt = (position) => {
        if(position >= 0 && position <= this.length){
            let previous
            current = this.head
            index = 0
            if(position === 0){
                this.head = current.next
            }else{
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
            return current.element
        }else{
            return null
        }
    }

    //删除
    this.remove = (element) => {
        let previous
        current = this.head
        if(element === current.element){
            this.head.next = current.next
            this.length--
            return true
        }
        previous = current
        current = current.next
        while(current){
            if(element === current.element){
                previous.next = current.next
                this.length--
                return true
            }else{
                previous = current
                current = current.next
            }
        }
    }

    this.indexOf = (element) => {
        let current = this.head, index = 0
        while(current){
            if(element === current.element){
                return index
            }else{
                current = current.next
                index++
            }
        }
    }

    this.isEmpty = () => {
        return this.length === 0
    }

    // this.find = (element) => {
    //     let current = this.head, previous
        
    // }

    this.reverseList = function(head) {
        let current = head
        let prev = null
        while(current){
            let cnext = current.next
            current.next = prev
            prev = current
            current = cnext
        }
        return prev
    };
}

let list = new List()
list.append('zhao')
list.append('qian')
list.append('sun')
list.append('li')
list.append('zhou')

// console.log('list', list)
// console.log('list', list.head)
console.log('reverse', list.reverseList(list.head))
