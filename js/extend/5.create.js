function Parent (name) {
    this.name = name
}

function creatObj (o){
    const clone = Object.create(o);
    clone.sayName = () => {
        console.log('name')
    }
    return clone
}

const parent1 = new Parent('tom')
const child = creatObj(parent1)
console.log('child', child.sayName())
/**
 * 寄生式继承
 * 
 */