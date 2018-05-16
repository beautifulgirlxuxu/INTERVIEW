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
function deepCopy(o){
    return JSON.parse(JSON.stringify(o));
}

var obj = {
    name: 'xuyanqing',
    age: 21,
    sex: 'female'
}

var copyObj = deepCopy(obj);
console.log(copyObj);