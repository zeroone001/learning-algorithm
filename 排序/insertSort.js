/* 
    插入排序
    原理，构建有序序列，对未排序的部分，
    对已排序的序列中从后往前扫描（注意，这里每次扫描都要移动位置，这样才能插入），
    然后插入

*/
/* 
    插入算法的核心思想是取未排序区间中的元素，
    在已排序区间中找到合适的插入位置将其插入，
    并保证已排序区间数据一直有序。
    重复这个过程，
    直到未排序区间中元素为空，算法结束。
*/

function insertSort (arr) {
    const arrlength = arr.length;
    if (arrlength <= 1) return arr;

    let current;
    let prevIndex;

    for(let i = 1; i < arrlength; i++) {
        current = arr[i];
        prevIndex = i - 1;

        // 迭代有序数组,从后往前遍历
        while(prevIndex >= 0 && arr[prevIndex] > current) {
            arr[prevIndex + 1] = arr[prevIndex];
            prevIndex--;
        }
        arr[prevIndex] = current;
    }
    return arr;
}









function insertionSort(arr) {
    let n = arr.length;
    let preIndex, current;
    for (let i = 1; i < n; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}




// function insertSort (array, n) {
//     if (n <= 1) return;
//     for (let index = 1; index < n; index++) {
//         const element = array[index]; // 即将
//         const j = index - 1;
//         /* 
//             // 已经插入的数组
//             // 这里倒着循环
//             有序数组最大的进行比较
//         */
//         for (; j >=0 ; --j) {
//             if (array[j] > element) {
//                 array[j+1] = array[j]; // 数据移动
//             } else {
//                 break;
//             }
            
//         }
//         array[j+1] = element;
        
//     }
// }

