var shallowCopy = (obj) => {
    if(typeof obj !== 'object') return
    let newObj = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj
}

var deepCopy = (obj) => {
    if(typeof obj !== 'object') return
    let newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return newObj
}

var deepCopyByJson = (obj) => {
    if(typeof obj !== 'object') return
    return JSON.parse(JSON.stringify(obj))
}

// var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
// var arr2 = shallowCopy(arr)
// var arr3 = deepCopy(arr)
// var arr4 = deepCopyByJson(arr)
// arr[3][0] = 'gaile1'
// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

let obj = {
    name: '张三',
    age: 22,
    date: new Date().getFullYear(),
    intro: function(){
        console.log(`My name is ${this.name}, i am ${this.age} years old`)
    }
}

const qianCopy = (obj) => {
    if(typeof obj !== 'object') return
    let newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

const shenCopy = (obj) => {
    if(typeof obj !== 'object') return
    let newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object' ? shenCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
var arr2 = qianCopy(arr)
var arr3 = shenCopy(arr)
arr[3][0] = 'gaile1'
console.log(arr)
console.log(arr2)
console.log(arr3)
