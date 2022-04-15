/**
 * 二分法
 * @param {*} nums 
 * @param {*} target 
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        // let mid = Math.floor((left + right)/2)
        let mid = left + ((right - left) >> 1)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            left = mid + 1
        }else if(nums[mid] > target){
            right = mid - 1
        }
    }
    return -1
};