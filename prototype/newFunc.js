// // 大写的就是一个类，函数也是一个类
function new2(func) {
    // 1 func 构造函数执行
    // var obj1 = obj;
    let o = Object.create(func.prototype)//第一个参数就是原型对象
    let k = func.call(o)
    // 私有的__proto__属性指向
    return typeof k === 'object' ? k : o;
    // 2 obj 原型链对象为func
    // 3 返回一个obj
}
function M() {
    this.name = '芬芬';
}
M.prototype = {
}
let m = new2(M);
console.log(m instanceof M);
console.log(m instanceof Object);
console.log(m.__proto__ === M.prototype)
console.log(m.__proto__.constructor === M)
