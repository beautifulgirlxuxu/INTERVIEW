function deepCopy (source) { 
    var result = {};//定义一个空对象
    for (var key in source) {
        //遍历对象的属性，如果是object，递归调用自身，否则直接存入新对象中
        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    } 
    return result; //返回这个新对象与源对象已经没有任何联系了
}


// 先使用内置的JSON.stringify()函数，将其转化为数组。此时生成的字符串已经和原对象没有任何联系了
// 再通过JSON.parse()函数，将生成的字符串转化为一个新的对象
// 缺点：IE8以下兼容问题,function不能copy过来
// JSON.parse()解析json格式的字符串将其转化成对象

function deepCopy1(o){
    return JSON.parse(JSON.stringify(o));
}

var obj = {
    name: 'xuyanqing',
    age: 21,
    sex: {
        1: 'male',
        2: 'female',
    },
    func: function () {}
}
var obj1 = [1,2,3,4,5];

var copyObj = deepCopy1(obj);
// copyObj.splice(0,2,8);
console.log(copyObj);
// console.log(obj1);