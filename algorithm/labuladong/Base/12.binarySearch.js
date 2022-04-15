/**
 * 704. 二分查找
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，
如果目标值存在返回下标，否则返回 -1。

示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 */
/**
 * []
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) >> 1;
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return -1;
};
//左侧边界 [)
var left_bound = function (nums, target) {
    let left = 0, right = nums.length;
    while(left < right){
        // let mid = left + (right - left)/2;
        let mid = (right + left) >> 1;
        if(nums[mid] >= target){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    //target比任何人数字都大
    if(left === nums.length) return -1;
    return nums[left] === target ? left : -1;
}
//左侧边界 []
var left_bound2 = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) >> 1;
        if(nums[mid] >= target){
            right = mid -1;
        }else{
            left = mid + 1;
        }
    }
    if(left > nums.length || nums[left] !== target){
        return -1;
    }
    return left;
}
//右侧边界
var right_bound = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) >> 1;
        if(nums[mid] <= target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    if(right < 0 || nums[right] !== target){
        return -1;
    }
    return right;
}

console.log(right_bound([1, 2, 2, 3, 4], -5))
// console.log(search([[-1,0,3,5,9,12]], 2))