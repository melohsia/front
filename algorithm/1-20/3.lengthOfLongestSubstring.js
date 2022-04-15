/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串的长度。
 * 输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sub=[]
    let maxLength = 0
    let currentLength = 0
    for(let i = 0; i < s.length; i++){
        if((sub.indexOf(s.charAt(i)) !== -1) && sub){
            let index = sub.indexOf(s.charAt(i))
            sub.splice(0, index+1)
            currentLength = 0
            sub.push(s.charAt(i))
        }else{
            sub.push(s.charAt(i))
            currentLength = sub.length
        }
        maxLength = maxLength > currentLength ? maxLength : currentLength
    }
    return maxLength
};
console.log(lengthOfLongestSubstring('pwwkew'))