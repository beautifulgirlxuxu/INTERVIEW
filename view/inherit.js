//定义一个父类
function People(name)  {
    this.name = name || 'People';
    this.sleep = function() {
        console.log(this.name + '正在睡觉！')
    }
}
People.prototype.eat = function(food) {
    console.log(this.name + '正在吃' + food)
}

//原型链继承
// 核心： 将父类的实例作为子类的原型
// function Qing() {

// }
// Qing.prototype = new People();
// Qing.prototype.name = '徐燕青';

// var qing = new Qing();
// console.log(qing.name);
// console.log(qing.eat('fish'));
// console.log(qing.sleep());
// console.log(qing instanceof Qing);
// console.log(qing instanceof People);


//构造继承
// 使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
// function Qing(name) {
//     People.call(this);
//     this.name = name || '徐燕青'
// }

// var qing = new Qing();
// console.log(qing.name);
// console.log(qing.sleep());
// console.log(qing.eat('fish'));//error
// console.log(qing instanceof People);
// console.log(qing instanceof Qing);

// 实例继承
// 核心：为父类实例添加新特性，作为子类实例返回
function Qing(name) {
    var insatnce = new People();
    insatnce.name = name || '徐燕青'
}

var qing = new Qing();
console.log(qing.name);
// console.log(qing.sleep());
// console.log(qing.eat());
console.log(qing instanceof People);
console.log(qing instanceof Qing)