// js 数组去重的几种方法
// [1, '1', 1] => [1, '1']
var arr = [1,4,6,4,6,'1',3,1];

//遍历数组，建立新数组，利用indexOf判断元素是否存在于新数组中，不存在则push到新数组，最后返回新数组
function Unique(arr) {
    let len = arr.length;
    let arrTemp = [];
    for(let i=0; i<len; i++) {
        if(arrTemp.indexOf(arr[i]) == -1) {
            arrTemp.push(arr[i]);
        }
    }
    return arrTemp;
  }
//   console.log(Unique(arr));



//ES6 Set()方法
var arrUnique = [...new Set(arr)];
// console.log(arrUnique);



// 遍历数组，利用object对象保存数组值，判断数组值是否已经保存在object中，未保存则push到新数组并用object[arrayItem]=1的方式记录保存
function Unique2 (arr) {//在对象里面数值"1"和1是一样的
    let len = arr.length,
        ret = [],
        obj = {};
    for(let i = 0; i < len; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1;
            ret.push(arr[i]);
        }
    }
    return ret;
}
// console.log(Unique2(arr));


// 数组下标判断法, 遍历数组，利用indexOf判断元素第一次出现的位置的索引是否与当前索引相等，如相等则加入

function Unique3(arr) {
    var ret = [];
    for(let i =0,len=arr.length; i< len; i++) {
        if(arr.indexOf(arr[i]) == i) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
// console.log(Unique3(arr));


function removeDuplicatedItem3(ar) {
    var ret = [];

    ar.forEach(function(e, i, ar) {
        if (ar.indexOf(e) === i) {
            ret.push(e);
        }
    });

    return ret;
}

// console.log(removeDuplicatedItem3(arr));


// 数组先排序， 然后比较俩数组一头一尾进行去重
function Unique4(arr) {
    let ret = [],
        end;
    arr.sort();
    end = arr[0];
    ret.push(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i]!=end) {
            ret.push(arr[i]);
            end = arr[i];
        }
    }
    return ret;
}
console.log('1' === 1);//false
console.log('1' == 1);//true
