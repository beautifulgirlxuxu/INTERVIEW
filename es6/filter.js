// filter()函数：对数组执行一次指定的回调函数，返回一个新数组，新数组的元素都是执行了回调函数返回值为true的原数组元素。

var data = {a:1,b:2,c:3,d:4};
var arr = Object.keys(data).filter(
    function(x) {
        return data[x] > 2;
    }
)

console.log(arr)