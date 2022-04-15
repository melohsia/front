/**
 * 只有一种括号时，判断括号是否有效
 */

var isValid1 = (str) => {
    //左括号的个数
    let left = 0;
    for(let c of str){
        if(c === '('){
            left++;
        }else if(c === ')'){
            left--;
        }
        if(left == -1){
            return false
        }
    }
    return left === 0;
}

/**
 * 20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true
提示：
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var leftOf =  c => {
        if(c === ')') return '(';
        if(c === ']') return '[';
        return '{';
    }

    let left = [];
    for(let c of s){
        if(c === '(' || c === '[' || c === '{'){
            left.push(c);
        }else{
            if(leftOf(c) !== left.pop()){
                return false;
            }
        }
    }
    return left.length === 0;
};

console.log(isValid('({[]}'))