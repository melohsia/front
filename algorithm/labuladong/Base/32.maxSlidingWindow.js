/**
 * 239. 滑动窗口最大值
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

示例 1：
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
示例 2：

输入：nums = [1], k = 1
输出：[1]
 
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var MonotonicQueue = function(){
    this.list = [];
}
MonotonicQueue.prototype.push = function(value){
    while(this.list.length && this.list[this.list.length-1] < value){
        this.list.pop();
    }
    this.list.push(value);
}

MonotonicQueue.prototype.max = function(x) {
    return this.list[0]
};

MonotonicQueue.prototype.pop = function(n) {
    if(n === this.list[0]){
        this.list.shift()
    }
};

var maxSlidingWindow = function(nums, k) {
    let monotonicQueue = new MonotonicQueue();
    let res = []
    for(let i = 0; i < nums.length; i++){
        if(i < k-1){
            monotonicQueue.push(nums[i]);
        }else{
            monotonicQueue.push(nums[i]);
            res.push(monotonicQueue.max());
            monotonicQueue.pop(nums[i-k+1])
        }
    }
    return res;
};

console.log(maxSlidingWindow([-7,-8,7,5,7,1,6,0], 4))

// let monotonicQueue = new MonotonicQueue();
// monotonicQueue.push(-7);
// monotonicQueue.push(-8);
// monotonicQueue.push(7);
// monotonicQueue.push(5);
// monotonicQueue.push(7);
// monotonicQueue.push(1);
// monotonicQueue.push(6);
// monotonicQueue.push(0);
// console.log(monotonicQueue.list)

// console.log(maxSlidingWindow([4, 3, 2, 1, 0], 3))