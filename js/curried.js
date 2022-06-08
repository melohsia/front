// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

function currying (fn) {
    return function curry (...args) {
        if(args.length >= fn.length){
            return fn.call(this, ...args)
        }else{
            return function (...args2) {
                return curry.apply(this, [...args, ...args2])
            }
        }
    }
}

function mul(a, b, c, d){
    return a * b * c * d
}

let myMul = currying(mul)

// console.log(myMul(1)(2, 4)(5))

// const sum = a => b => c => a + b + c;

// console.log(sum(1)(2)(3));

// 支持多参数传递，原理是：使用闭包保存历史参数，使用递归解决多参数问题
// function currying(fun, initArgs){
//     let _this = this;
//     // 被改造函数的参数个数
//     let length = fun.length;
//     let args = initArgs || [];

//     return function () {
//         let _args = [...args, ...arguments];
//          // 如果参数个数小于最初的fun.length，则递归调用，继续收集参数
//         if(_args.length < length) {
//             return currying.call(_this, fun, _args)
//         }
//         // 参数收集完毕，则执行函数，返回结果
//         return fun.call(_this, fun)
//     }
// }


function myCurried (fn) {
    return function curry (...args1) {
        if(args1.length >= fn.length){
            return fn.call(null, ...args1);
        }else{
            return function (...args2) {
                return curry.apply(null, [...args1, ...args2]);
            }
        }
    }
}

function sum (a, b, c) {
    console.log('arguments', ...arguments)
    return a + b + c;
}

// let mySum = myCurried(sum);
console.log(sum(1, 5, 6))