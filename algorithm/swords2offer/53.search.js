/**
 * 统计一个数字在排序数组中出现的次数。
 * 示例 1:

    输入: nums = [5,7,7,8,8,10], target = 8
    输出: 2
    示例 2:

    输入: nums = [5,7,7,8,8,10], target = 6
    输出: 0
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let times = 0
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === target){
//             times++
//         }
//     }
//     return times
// };

var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = left + ((right - left) >> 1)
        if(nums[mid] === target){
            if(nums[left] === target && nums[right] === target) return right-left+1
            else if(nums[left] < target){
                left++
            }else if(nums[right] > target){
                right--
            }
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return 0
};

console.log(search([5, 7, 7, 7, 8, 8, 10], 7))