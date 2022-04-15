/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
*/
/**
 * @param {string} s
 * @return {string}
 */
//version1 超出时间限制
var longestPalindromeOragin = function(s) {
    if(s.length < 1) return
    if(s.length === 1) return s
    let maxLength = ''
    for(let i=0; i<s.length-1; i++){
        let currentEle = []
        currentEle.push(s.charAt(i))
        for(let j=i+1; j<s.length; j++){
            currentEle.push(s.charAt(j))
            let copyCurrentEle = JSON.parse(JSON.stringify(currentEle))
            if(currentEle.toString() === copyCurrentEle.reverse().toString()){
                maxLength = maxLength.length > currentEle.length ? maxLength : currentEle.toString().replace(/,/g,'')
            }
        }
    }
    if(s.length && (!maxLength)) return s.charAt(0)
    return maxLength
};
//暴力遍历法
var longestPalindromeV1 = function(s) {
    if(s.length < 2) return s
    let sArr = Array.from(s)
    let maxLength = 1
    let begin = 0
    for(let i=0; i<sArr.length-1; i++){
        for(let j=i+1; j<sArr.length; j++){
            if((j-i+1)>maxLength && isPalindrome(sArr, i, j)){
                maxLength = j-i+1
                begin = i
            }
        }
    }
    return s.substring(begin, begin+maxLength)
}

var isPalindrome = function (sArr, left, right){
    while(left<right){
        if(sArr[left] !== sArr[right]){
            return false
        }
        left++
        right--
    }
    return true
}

//动态规划
var longestPalindrome = function(s) {
    let sArr = Array.from(s)
    let maxLength =1
    let begin =0
    let dp = []
    for(let i=0; i<sArr.length; i++){
        dp[i]=[]
    }

    for(let i=0; i<sArr.length; i++){
        dp[i][i] = true
    }

    for(let j=1; j<sArr.length; j++){
        for(let i=0; i<j; i++){
            if(sArr[i] !== sArr[j]){
                dp[i][j] = false
            }else{
                if(j-i<3){
                    dp[i][j] = true
                }else{
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if((j-i+1>maxLength)&&dp[i][j]){
                maxLength=j-i+1
                begin=i
            }
        }
    }
    return s.substring(begin, maxLength)
};

console.log(longestPalindrome('babad'))