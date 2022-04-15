/**
 * 1094. 拼车
假设你是一位顺风车司机，车上最初有 capacity 个空座位可以用来载客。由于道路的限制，车 
只能 向一个方向行驶（也就是说，不允许掉头或改变方向，你可以将其想象为一个向量）。

这儿有一份乘客行程计划表 trips[][]，其中 trips[i] = [num_passengers, start_location, end_location] 
包含了第 i 组乘客的行程信息：

必须接送的乘客数量；
乘客的上车地点；
以及乘客的下车地点。
这些给出的地点位置是从你的 初始 出发位置向前行驶到这些地点所需的距离（它们一定在你的行驶方向上）。

请你根据给出的行程计划表和车子的座位数，来判断你的车是否可以顺利完成接送所有乘客的任务（当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false）。

示例 1：
输入：trips = [[2,1,5],[3,3,7]], capacity = 4
输出：false

示例 2：
[0 0 0 0 0 0 0]
[2 2 2 2 0 0 0]
[0 0 3 3 3 3 3]

输入：trips = [[2,1,5],[3,3,7]], capacity = 5
输出：true
 * 
 */

function Difference (nums){
    const length = nums.length;
    this.diff = new Array(length);
    this.diff[0] = nums[0];
    for(let i = 1; i < length; i++){
        this.diff[i] = nums[i] - nums[i-1];
    }

    this.increase = (i, j, val) => {
        this.diff[i] += val;
        if(j+1 < length) {
            this.diff[j+1] -= val;
        }
    }

    this.result = () => {
        const length = this.diff.length;
        const res = new Array(length).fill(0)
        res[0] = this.diff[0]
        for(let i = 1; i < length; i++){
            res[i] = res[i-1] + this.diff[i]
        }
        return res;
    }
}
 /**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const params = new Array(10).fill(0);
    const difference = new Difference(params);
    for(let trip of trips ){
        const start = trip[1];
        const end = trip[2]-1;
        const val = trip[0];
        difference.increase(start, end, val);
    }
    const resArr = difference.result();
    for(let res of resArr){
        if(res > capacity){
            return false
        }
    }
    return true;
};

console.log(carPooling([[2,1,5],[3,3,7]], 4))
console.log(carPooling([[2,1,5],[3,3,7]], 5))