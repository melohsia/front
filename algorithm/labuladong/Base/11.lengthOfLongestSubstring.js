/**
 * 3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window ={};
    let left = 0, right = 0;
    let res = 0;
    while(right < s.length){
        let c = s[right];
        right++;
        window[c] = (window[c] || 0) + 1;
        while(window[c] > 1){
            let d = s[left];
            window[d]--;
            left++;
        }
        res = Math.max(res, right-left);
    }
    return res;
};

console.log(lengthOfLongestSubstring('pwwkew'));