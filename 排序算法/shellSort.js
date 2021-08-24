/* 
    希尔排序

*/

function shellSort (arr) {
    const arrLength = arr.length;
    for (let gap = Math.floor(arrLength / 2); gap > 0; i = Math.floor(gap / 2)) {
        for (let i = gap; i < arrLength; i++) {
            // 下面进行插入操作

            let current = arr[i];
            let prevIndex = i;

            // 迭代, 不断往前找
            while(prevIndex - gap >= 0 && arr[prevIndex - gap] > current) {
                arr[prevIndex] = arr[prevIndex - gap];
                prevIndex = prevIndex - gap;
            }
            arr[prevIndex] = current;
        }
    }
    return arr;
}




