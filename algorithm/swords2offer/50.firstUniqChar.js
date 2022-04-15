/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

    示例:

    s = "abaccdeff"
    返回 "b"

    s = "" 
    返回 " "
 */

 /**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if(s==='') return ' '
    let map = new Map()
    let strArr = []
    for(let i = 0; i < s.length; i++){
        map.set(s.charAt(i), 0)
    }
    strArr = Array.from(new Set(strArr))
    for(let i = 0; i < s.length; i++){
        map.set(s.charAt(i), j++)
    }
    console.log(map)
};

console.log(firstUniqChar('abaccdeff'))