//  co 顺序执行异步，自动化方案
// 生成器函数 generator
// es6推出的两个新函数 async generator
function * fn(a) {
    // 添加一些异步操作 同步化运行
    // yield 暂停一下 停下来 后面接一个promise对象
    a = yield a 
    let b = yield 2;
    let c = yield 3;
    return a + b + c;
}
function co(fn, ...args) {
    let g = fn(...args);
    return new Promise((resolve, reject) => {
        function next(lastValue) {
            // next 参数可以参与yield 后面的计算
            let { value, done } = g.next(lastValue)
            if (done) {
                resolve(value)
            } else {
                next(value)
            }

        }
        next();
    })
    // fn() 执行才能迭代
    // next() 才能往下
    // 返回值 done true|false
    // resolve那一刻
}
// return promise resolve(fn result)
co(fn, 100).then(value => {
    console.log(value)
})
// 迭代器 手动地完成异步yield+next()
// let g = fn();
// value为上一次停下来yield的值
// {value:?, done: true}
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
