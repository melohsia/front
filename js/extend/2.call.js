function Parent (name) {
    this.name = name
}

Parent.prototype.age = 10;

function Child (name) {
    Parent.call(this, name)
    // this.age = 12
}

const child = new Child('tom')
console.log('child', child, child.age)

/**
 * 借用构造函数继承
 * 用call()、apply()将父类构造函数引入并且自执行
 * 特点：1.只能继承父类构造函数的属性，没有继承父类原型的属性
 *      2.可以继承多个构造函数属性
 *      3.在子实例中可以父实例传参
 * 缺点：1.只能继承父类的构造函数属性
 *      2.无法实现构造函数的复用（每次用户都要重新调用）
 *      3.每个新实例都有父类构造函数的副本，臃肿
 */