/**
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
示例：

输入：[1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(k < 1){
        return
    }
    let maxAverageArr = []
    for(let i = 0; i < nums.length-k+1; i++){
        let subNums = nums.slice(i, k+i);
        let maxAverage = subNums.reduce((pre, item) => {
            return pre + item;
        })
        maxAverageArr.push(maxAverage)
    }
    let max = maxAverageArr[0]
    for(let i =1; i < maxAverageArr.length; i++){
        max = max > maxAverageArr[i] ? max : maxAverageArr[i]
    }
    return max/k;
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4))