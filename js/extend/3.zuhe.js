function Parent (name) {
    this.name = name
}

Parent.prototype.age = 10;

function Child (name) {
    Parent.call(this, name)//第二次
}

Child.prototype = new Parent()//第一次
Child.prototype.constructor = Child

const child = new Child('tom')
console.log('child', child, child.age)

/**
 * 组合继承
 * 缺点：两次调用了父类的构造函数
 */