function insertSort (arr) {
    let len = arr.length;
    var temp;
    for(var i = 1; i < len; i++) {
        temp = arr[i];
        for(var j = i; j >= 0; j--) {
            if(arr[j-1] > temp) {
                arr[j] = arr[j-1];
            } else {
                arr[j] = temp;
                break;
            }
        }
    }
    return arr;
}

var arrEg = [2,3,1,5,8,4,7,6];
console.log(insertSort(arrEg)); 