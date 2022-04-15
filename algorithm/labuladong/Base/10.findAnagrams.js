/**
 * 438. 找到字符串中所有字母异位词
给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 */
 /**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const need ={}, window = {};
    for(let c of p){
        need[c] = (need[c] || 0) + 1;
    }
    let left = 0, right = 0, valid = 0;
    let res = [];
    while(right < s.length){
        let c = s[right];
        right++;
        if(need[c]){
            window[c] = (window[c] || 0) + 1;
            if(window[c] === need[c]){
                valid++
            }
        }
        while(right - left >= p.length){
            if(valid === Object.keys(need).length){
                res.push(left);
            }
            let d = s[left];
            left++
            if(need[d]){
                if(window[d] === need[d]){
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return res;
};

console.log(findAnagrams('cbaebabacd', 'abc'))