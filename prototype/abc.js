// apply call bind：改变函数执行时的上下文
// call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。
function Person(name){
  this.name = name;
}
Person.prototype = {
//   constructor: Person,
  showName: function(){
    console.log(this.name);
  }
}
var person = new Person('qianlong');
//   person.showName();

var animal = {
    name: 'cat'
}
// Person.prototype.showName.call(animal);
// Person.prototype.showName.apply(animal);
// Person.prototype.showName.bind(animal)();
// person.showName.call(animal);

// 利用apply、call来求数组的最大值与最小值
// var arr = [1,2,3,-1,-2,-3]
// console.log(Math.max.apply(Math,arr));
// console.log(Math.max.call(Math,1,2,3,-1,-2,-3));
// console.log(Math.min.apply(Math,arr));
// console.log(Math.min.call(Math,1,2,3,-1,-2,-3));

// 将伪数组转化成真正的数组（数据结构的数据必须带有数字下标且有length属性
// var arrLike = {
//     0: 'cat',
//     1: 'dog',
//     2: function eat(){},
//     length: 3
// }
// var arr = Array.prototype.slice.apply(arrLike);
// console.log(arr);
// arr.push(123);
// console.log(arr);

// // 判断对象类型的具体类型
// var abc = function () {}
// console.log(Object.prototype.toString.apply(123) == '[object Array]')
// console.log(Object.prototype.toString.call(abc) == '[object Function]')

// 用作继承
var Person = function(name,age) {
    this.name = name;
    this.age = age;
}
var Girl = function(name, age) {
    Person.call(this, name, age)
}
var Boy = function(name, age) {
    Person.apply(this, arguments)
}
var g1 = new Girl('qing', 18)
var b1 = new Boy('xu', 22)
console.log(g1.name + g1.age + '岁了')
console.log(b1.name + b1.age + '岁了');
