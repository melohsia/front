/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：
你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let res = [];
    while(left <= right){
        let mid = (left + right) >> 1;
        if(nums[mid] >= target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    if(left > nums.length || nums[left] !== target){
        res[0] = -1
    }else{
        res[0] = left;
    }
    let left2 = 0, right2 = nums.length - 1;
    while(left2 <= right2){
        let mid = (left2 + right2) >> 1;
        if(nums[mid] <= target){
            left2 = mid + 1;
        }else{
            right2 = mid - 1;
        }
    }
    if(right2 < 0 || nums[right2] !== target){
        res[1] = -1
    }else{
        res[1] = right2;
    }
    return res;
};

console.log('searchRange', searchRange([5,7,7,8,8,10], 6))