function Parent (name) {
    this.name = name
}

Parent.prototype.age = 10;

function Child () {}
Child.prototype = new Parent()
Child.prototype.Constructor = Child

const child = new Child();
console.log('child', child.age)

/**
 * 原型链继承
 * 继承单一
 * 属性被实例所共享，一个实例修改了原型属性，别的实例的原型属性也会被修改
 * 无法向父类传参
 */