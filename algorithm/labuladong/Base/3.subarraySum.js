/**
 * 560. 和为 K 的子数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。

 

示例 1：

输入：nums = [1,1,1], k = 2
输出：2
示例 2：

输入：nums = [1,2,3], k = 3
输出：2
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum_base = function(nums, k) {
    const length = nums.length;
    const preNums = new Array(length+1).fill(0);
    for(let i = 0; i < length; i++){
        preNums[i+1] = preNums[i] + nums[i];
    }
    let res = 0
    for(let i = 1; i < preNums.length; i++){
        for(let j = 0; j < i; j++){
            if(preNums[i] - preNums[j] === k){
                res++
            }
        }
    }
    return res
};

var subarraySum = function(nums, k) {
    const length = nums.length;
    const preNums = new Map();
    preNums.set(0, 1);

    let res = 0, sums_i = 0;
    for(let i = 0; i < length; i++){
        sums_i += nums[i];
        let sums_j = sums_i - k;
        if(preNums.has(sums_j)){
            res += preNums.get(sums_j);
        }
        preNums.set(sums_i,( preNums.get(sums_i) || 0 )+ 1);
    }
    return res;
};

console.log(subarraySum([1,1,1], 2))