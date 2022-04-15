/**
 * 找出数组中重复的数字。

    在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
    数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
    请找出数组中任意一个重复的数字

    示例 1：

    输入：
    [2, 3, 1, 0, 2, 5, 3]
    输出：2 或 3 
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let arrs = nums.sort()
    for(let i = 0; i < arrs.length - 1; i++){
        if(arrs[i] == arrs[i+1]){
            return arrs[i]
        }
    }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
// console.log([2, 3, 1, 0, 2, 5, 3].sort())