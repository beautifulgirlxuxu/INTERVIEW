// 实例（tidy）与原型链（Dog.prototype）存在一个连接，而不是构造函数存在连接
function Cat() {}
function Dog() {}

Cat.price = '2000';
Dog.prototype = Cat;
// Dog.prototype.price = '2000';
var tidy = new Dog();
// console.log(tidy.price);
// console.log(Dog.prototype.price);

console.log(tidy.__proto__ === Dog.ptototype);