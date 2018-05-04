function sort(arr) {
    var length = arr.length;
    for(var i=0; i<length; i++) {
        if (arr[i+1] - arr[i] > 1) {
            console.log("漏掉的数是" + (arr[i] + 1))
        }
    }
    return arr;
}

var arr1 = [1,3,4,5,7,9];
// console.log(sort(arr1));


// function br(a,b,c) {
//     arguments[2] = 10;
//     console.log(c);
// }

// br(1,2,3)