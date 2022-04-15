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

var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
// var arr2 = shallowCopy(arr)
var arr2 = deepCopy(arr)
arr[3][0] = 'gaile1'
console.log(arr)
console.log(arr2)