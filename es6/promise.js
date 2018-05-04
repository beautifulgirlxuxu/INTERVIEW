// Promise就是一个容器，里面放着未来发生的一件事的结果
// 三个状态pending,resolved,rejected,只有异步操作才能改变状态
// then函数为promise实例添加状态改变的回调函数
// catch函数用于指定发生错误时的函数
// 让异步操作以同步操作的形式表现出来
function asyncRun(data) {
    var p = new Promise(function(resolve,reject) {
        if(data) {
            resolve(data);
        } else {
            reject(reason);
        }
    })
    return p;
}

asyncRun(3);
