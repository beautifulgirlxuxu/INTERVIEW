function selectSort(arr) {
    var len = arr.length,
        i,
        j,
        temp,
        minIndex,
        minValue;
    for (i = 0; i < len - 1; i++) {
        minIndex = i;
        minValue = arr[minIndex];
        for (j = i + 1; j < len; j++) {
            if(arr[j] < minValue) {
                minIndex = j;
                minValue = arr[minIndex];
            }
        }
        //交换位置
        temp = arr[i];
        arr[i] = minValue;
        arr[minIndex] = temp;
    }
    return arr;
}

var arr1 = [3,1,5,6,2,8,4,7]
console.log(selectSort(arr1));