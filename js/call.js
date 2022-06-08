Function.prototype._Call = function (context) {
    if(typeof this !== 'function'){
        throw new TypeError('Error')
    }
    context = context || window;
    context.fn = this;
    const args = Array.from(arguments).slice(1);
    const res = context.fn(...args);
    delete context.fn;
    return res
}

Function.prototype._Apply = function (context) {
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    context = context || window;
    context.fn = this;
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete context.fn;
    return result;
}

Function.prototype._Bind = function (context) {
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    const args = Array.from(arguments).slice(1);
    const self = this;
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        // 对于 new 的情况来说，不会被任何方式改变 this
        if(this instanceof F){
            return new self(...args, ...arguments)
        }else{
            return self.apply(context, args.concat(...arguments))
        }
    }
}

// 普通函数
function test(age) {
    console.log(this.name + " " + age);
}
function test2(age, age2, age3) {
    console.log(this.name + " " + age + " " + age2 + " " + age3);
}

// 自定义对象
var obj = {
    name: 'PJ'
}

let F = test2._Bind1(obj, 1, 2, 3);
F();