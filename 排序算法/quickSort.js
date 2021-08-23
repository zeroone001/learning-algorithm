/* 
    快速排序
    定义两个指针，从两头开始扫描
    左侧指针找比 pivot 大的数字，
    右侧指针找比 pivot 小的数字，
    然后进行交换

*/
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
let partition = (arr, left, right) => {
    // 取中间项作为基准
    var pivot = arr[Math.floor(Math.random() * (right - left + 1)) + left],
      i = left,
      j = right;
    
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i += 1
            j -= 1
        }
    }
    return i;
};

let quick = (arr, left, right) => {
    let index;
    if (left < right) {
        index = partition(arr, left, right);

        if (left < index - 1) {
            quick(arr, 0, index - 1);
        } 
        if (index < right) {
            quick(arr, index, right);
        }
    }
};
let quickSort = (arr) => {
    quick(arr, 0, arr.length - 1);
}
