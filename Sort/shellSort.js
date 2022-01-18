/* 
    希尔排序

*/

function shellSort (arr) {
    const arrLength = arr.length;
    // 第一步进行分组
    for (let gap = Math.floor(arrLength / 2); gap > 0; gap = Math.floor(gap / 2)) {

        // 第二步骤，进行插入排序
        
        // 从分组里的第二个元素，开始往后遍历, 
        // 注意这里，分组里面的每个元素之间的间隔是gap
        for (let i = gap; i < arrLength; i++) {
            let j = i;
            let current = arr[i];

            while (j - gap >= 0 && arr[j-gap] > current) {
                arr[j] = arr[j-gap];
                j = j- gap;
            }
            arr[j] = current;
            
        }
        
    }
    return arr;
}

















/* function shellSort (arr) {
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
 */



