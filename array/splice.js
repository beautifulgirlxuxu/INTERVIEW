// 从数组中添加删除项目，然后返回被删除的项目，会改变原数组
// arrOject.splice(index,howmany,item1,item2,item3...itemN)
// index:要删除的元素的索引
// howmany：要删除的元素个数
// item1...itemN表示向数组添加的元素（从表头添加）
var arr = [1,2,3,4,5];
var arr1 = arr.splice(0,2,6,7);
console.log(arr);
console.log(arr1);