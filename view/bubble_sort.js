// 12 35 99 18 75 
// 35 12 99 18 75
// 35 99 12 18 75
// 35 99 18 12 75
// 35 99 18 75 12
// 99 35 18 75 12
// 冒泡 邻居 换位 一次将一个数换在它该在的位置
// 一个数一次轮回 n-i-1
// j
// 排序 大->小
function bubbleSort(arr) {
    let length = arr.length
    // 每个数都要有一次轮回
    let temp = null;
    for(let i = 0; i < length - 1; i++) {
        for(let l = 0; l< length-i-1; l++) {
            if (arr[l]>arr[l+1]) {
                temp = arr[l];
                arr[l] = arr[l+1];
                arr[l+1] = temp;
            }
        }
    }
    return ('数组从小到大排序为'+ arr)
}

console.log(bubbleSort([12,35,99,18,75]))