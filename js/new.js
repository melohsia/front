/**
 * 
 * 1.创建一个空对象
 * 2.为对象添加属性__proto__,将该属性链接至构造函数的原型对象
 * 3.将对象作为this的上下文
 * 4.若该函数没有返回对象，则返回this
 */

 function _new (fn, ...args) {
    if(typeof fn !== 'function'){
        throw TypeError('Error');
    }
    let obj = Object.create(fn.prototype);
    const res = fn.apply(obj, args);
    return res instanceof Object ? res : obj;
 }

 function Person (age, name) {
    this.age = age;
    this.name = name;
 }
 Person.prototype.intro = function () {
     console.log('my name is '+ this.name + ', age is ' + this.age)
 }

 const p1 = _new(Person, 26, 'zs');
 p1.intro();