// Array.sort()
// 不提供参数，按字母顺序排序
// 正常排序，提供两个参数，a,b，返回一个体现元素排序位置的值
var arr = [21,3,2,12,55,43,99,19]

var arrSort = arr.sort(function(param1,param2) {
    return param1 -param2;
})
console.log(arrSort);