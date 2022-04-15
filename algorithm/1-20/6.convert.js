/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    //第一行
    let newS=''
    for(let i=0;i<s.length;i+=numRows+1){
        // newS+=s.charAt(i)
        // console.log(newS)
        console.log(s.charAt(i))
    }
};
convert('PAYPALISHIRING', 3)