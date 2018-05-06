// 1,1,2,3,5,8,13,21,34...
// 数列从第三项开始每一项是前两项的和
// 实现一个函数，返回数列的第n项
// function getFibonacci(n) {
//     if(n < 0) return 0;
//     if(n < 2) return 1;
//     var first = 1;
//     var second = 1;
//     var third;
//     for(var i = 2; i < n; i++) {
//         third = first + second;
//         first = second;
//         second = third;
//     }
//     return third;
// }


function getFibonacci(n) {
    if(n < 3) {
        return 1;
    } else {
        return getFibonacci(n-1) + getFibonacci(n-2);
    }
}

console.log(getFibonacci(0.5));