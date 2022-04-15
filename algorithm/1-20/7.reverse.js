/**
 * 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
示例 1：
输入：x = 123
输出：321
提示：
-2^31 <= x <= 2^31- 1
2^31-1=2147483647,-2^31=-2147483648
 */

 /**
 * @param {number} x
 * @return {number}
 */
var reverseV1 = function(x) {
    let reverseNum=''
    let xChar = x.toString()
    reverseNum = x>=0 ? '' : '-' 
    let k = x>0 ? 0 : 1
    for(let i=xChar.length-1; i>=k; i--){
        reverseNum+=xChar.charAt(i)
    }
    let n = Number(reverseNum)
    return (n >=2**31-1 || n <= -(2**31)-1) ? 0 : n
};

console.log(reverse(1534236469))