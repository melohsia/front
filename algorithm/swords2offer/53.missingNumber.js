/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，
 * 并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

    示例 1:

    输入: [0,1,3]
    输出: 2
    示例 2:

    输入: [0,1,2,3,4,5,6,7,9]
    输出: 8
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== i){
//             return i
//         }
//     }
//     return nums.length
// };

var missingNumber = function(nums) {
    let left = 0
    let right = nums.length-1
    if(left === nums[left] && right === nums[right]) return right+1
    while(left <= right){
        let mid = left + ((right - left) >> 1)
        if(mid < nums[mid]){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return left
};

console.log(missingNumber([0,1,3]))