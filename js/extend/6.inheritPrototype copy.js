function inheritPrototype (Child, Parent){
  const childPrototype = Object.create(Parent.prototype);
  childPrototype.constructor = Child;
  Child.prototype = childPrototype;
}

function Parent (name) {
  this.name = name;
}
Parent.prototype.sayHi = function (){
  console.log(`hi, ${this.name}`);
}

function Child (name){
  Parent.call(this, name);
}

inheritPrototype(Child, Parent)

Child.prototype.sayHello = function (){
  console.log(`hello, ${this.name}`);
}


const child1 = new Child('erzi')
child1.sayHi();
child1.sayHello();

console.log(child1.__proto__)