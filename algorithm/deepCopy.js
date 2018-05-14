var deepCopy= function(source) { 
    var result={};
    for (var key in source) {
          result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
       } 
       return result; 
}


// 先使用内置的JSON.stringify()函数，将其转化为数组。此时生成的字符串已经和原对象没有任何联系了
// 再通过JSON.parse()函数，将生成的字符串转化为一个新的对象
function deepCopy(o){
    return JSON.parse(JSON.stringify(o));
}