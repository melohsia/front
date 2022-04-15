/**
 * 870. 优势洗牌
给定两个大小相等的数组 A 和 B，A 相对于 B 的优势可以用满足 A[i] > B[i] 的索引 i 的数目来描述。

返回 A 的任意排列，使其相对于 B 的优势最大化。

示例 1：
输入：A = [2,7,11,15], B = [1,10,4,11]
输出：[2,11,7,15]

示例 2：
输入：A = [12,24,8,32], B = [13,25,32,11]
输出：[24,32,8,12]
 

提示：
1 <= A.length = B.length <= 10000
0 <= A[i] <= 10^9
0 <= B[i] <= 10^9
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    let indexB = new Array(5).fill(0).map((v, i) => i);
    indexB.sort((x, y) => {
        if (nums2[x] > nums2[y]) return 1;
        return -1;
    });
    console.log(indexB)
};

// let indexB = new Array(5).fill(0).map((v, i) => i);
// indexB.sort((x, y) => {
//     if (nums2[x] > nums2[y]) return 1;
//     return -1;
//   });
console.log(advantageCount)