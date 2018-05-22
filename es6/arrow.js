// 箭头函数(args)=>{console.log(args)}：符号前为函数参数，箭头后为执行的函数主体。
// 箭头函数的this指向问题：箭头函数本身没有this，在对象内直接调用箭头函数，this指向window，在函数里面被调用时，this执行父函数的this。
// 箭头函数修复了js里面的js动态指向问题，内部的this是一个词法作用域，它的值由上下文决定，总是指向这个词法作用域，也就是外部的调用对象

let add = (a,b) => a+b;
console.log(add(3,5));
