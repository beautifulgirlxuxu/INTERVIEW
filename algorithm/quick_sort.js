// 在数据集之中，选择一个元素作为”基准”（pivot）。
// 所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。这个操作称为分区 (partition)操作
// 分区操作结束后，基准元素所处的位置就是最终排序后它的位置。
// 对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
function quickSort(arr){
    function swap(arr,right,left){
        var tmp = arr[right];
        arr[right]=arr[left];
        arr[left]=tmp;
    }
    function partition(arr,left,right){//分区操作，
        var pivotValue=arr[right]//最右面设为标准
        var storeIndex=left;
        for(var i=left;i<right;i++){
            if(arr[i]<=pivotValue){
                swap(arr,storeIndex,i);
                storeIndex++;
            }
        }
        swap(arr,right,storeIndex);
        return storeIndex//返回标杆元素的索引值
    }
    function sort(arr,left,right){
        if(left>right) return;
        var storeIndex=partition(arr,left,right);
        sort(arr,left,storeIndex-1);
        sort(arr,storeIndex+1,right);
    }
    sort(arr,0,arr.length-1);
    return arr;
}