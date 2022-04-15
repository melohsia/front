/**
 * 567. 字符串的排列
给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
换句话说，s1 的排列之一是 s2 的 子串 。

示例 1：

输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
示例 2：

输入：s1= "ab" s2 = "eidboaoo"
输出：false
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const need = {}, window = {};
    for(let c of s1){
        need[c] = (need[c] || 0) + 1;
    }
    let left = 0, right = 0, valid = 0;
    while(right < s2.length){
        let c = s2[right];
        right++;
        if(need[c]){
            window[c] = (window[c] || 0) + 1;
            if(window[c] === need[c]){
                valid++;
            }
        }
        while(right - left >= s1.length){
            if(valid === Object.keys(need).length){
                return true;
            }
            let d = s2[left];
            left++;
            if(need[d]){
                if(need[d] === window[d]){
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return false;
};

console.log(checkInclusion('abc', 'cccccaaaaabbb'))
