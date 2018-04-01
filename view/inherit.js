//定义一个父类
// function People(name)  {
//     this.name = name || 'People';
//     this.sleep = function() {
//         console.log(this.name + '正在睡觉！')
//     }
// }
// People.prototype.eat = function(food) {
//     console.log(this.name + '正在吃' + food)
// }

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
// function Qing(name) {
//     var insatnce = new People();
//     insatnce.name = name || '徐燕青'
// }

// var qing = new Qing();
// console.log(qing.name);
// // console.log(qing.sleep());
// // console.log(qing.eat());
// console.log(qing instanceof People);
// console.log(qing instanceof Qing)

// 构造函数绑定，将父对象的构造函数通过call、apply绑定到子对象中
function Animal() {
    // this.species = '动物';
}
Animal.prototype.species = '动物';
function Cat(name, color) {
    // Animal.call(this)
    this.name = name;
    this.color = color;
}
// Cat.prototype = new Animal();
// // Cat.prototype = Animal.prototype;
// Cat.prototype.constructor = Cat;
function extend(parent, child) {
    // var F = function(){};
    // F.prototype = parent.prototype;
    // child.prototype = new F();
    // child.prototype.constructor = child;
    var p = parent.prototype;
    var c = child.prototype;
    for(i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}
extend(Animal, Cat)

var cat1 = new Cat('小花', '白色')
// console.log(cat1.name + cat1.color + '属于' + cat1.species);
// console.log(cat1.constructor === Cat);
// console.log(cat1.constructor === Animal);

var Chinese = {
    nation: '中国'
}
// var Docter = {
//     career: '医生'
// }

// function object(o) {
//     function F() {}
//         F.prototype = o;
//         return new F();
// }
Chinese.birthPlaces = ['北京','上海','香港'];
function extendCopy(p, c) {
    var c = c || {};
    for (var i in p) {
　　  if (typeof p[i] === 'object') {
    　　　    c[i] = (p[i].constructor === Array) ? [] : {};
    　　　　　extendCopy(p[i], c[i]);
　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
    return c;
}

var Docter = extendCopy(Chinese);
Docter.birthPlaces.push ('厦门');
console.log(Docter.birthPlaces);
console.log(Chinese.birthPlaces);
// console.log(Docter.prototype.constructor);
