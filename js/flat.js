/**
 * 数组扁平化
 */
const arr = [1,2,[3,4,5,[6,7],8],9,10,[11,[12,13], 'zhangdan']];
// 1.ES6 flat方法
// console.log(arr.flat(Infinity))

// 2. 正则处理
function flatByReg(arr){
    let str = JSON.stringify(arr).replace(/(\[|\])/g, '');
    return JSON.parse(`[${str}]`);
}

// 3. 递归
function flatByRecursion (arr, result=[]) {
    for(let item of arr){
        if(Array.isArray(item)){
            flatByRecursion(item, result);
        }else{
            result.push(item);
        }
    }
    return result;
}

// 4. reduce
// 4.1 reduce + 递归
function flatByReduce (arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatByReduce(cur) : cur)
    }, [])
}

// 4.2 reduce + 拓展运算符
function flatByReduce2 (arr) {
    return arr.reduce((pre, cur) => {
        return (Array.isArray(cur) ? [...pre, ...flatByReduce2(cur)] : [...pre, cur])
    }, [])
}

// 5. 拓展运算符
function flatByEllipsis (arr) {
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}

// 6. toString,仅使用于全数字的情况
function flatBy2String (arr) {
    return arr.toString().split(',').map((item) => {
        return +item; //将字符串转成数字
    });
}
console.log(flatBy2String(arr))