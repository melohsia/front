/**
 * 用两个栈实现一个队列。队列的声明如下：
 * 请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 * 
 * 示例 1：

    输入：
    ["CQueue","appendTail","deleteHead","deleteHead"]
    [[],[3],[],[]]
    输出：[null,null,3,-1]
    示例 2：

    输入：
    ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
    [[],[],[5],[2],[],[]]
    输出：[null,-1,null,null,5,2]

    提示：

    1 <= values <= 10000
    最多会对 appendTail、deleteHead 进行 10000 次调用
 */

var CQueue = function() {
    this.stackIn = []
    this.stackOut = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackIn.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stackOut.length){
        return this.stackOut.pop()
    }else{
        if(this.stackIn.length){
            while(this.stackIn.length){
                this.stackOut.push(this.stackIn.pop())
            }
            return this.stackOut.pop()
        }else{
            return -1
        }
    }
};

var obj = new CQueue()
obj.appendTail(3)
obj.appendTail(1)
obj.appendTail(3)
obj.deleteHead()
// obj.deleteHead()
// obj.deleteHead()
console.log('obj', obj)

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */