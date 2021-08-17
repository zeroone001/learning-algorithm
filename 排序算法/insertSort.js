/* 
    插入排序

*/

function insertSort (array, n) {
    if (n <= 1) return;
    for (let index = 1; index < n; index++) {
        const element = array[index]; // 即将
        const j = index - 1;

        
        /* 
            // 已经插入的数组
            // 这里倒着循环
            有序数组最大的进行比较
        */
        for (; j >=0 ; --j) {
            if (array[j] > element) {
                array[j+1] = array[j]; // 数据移动
            } else {
                break;
            }
            
        }
        array[j+1] = element;
        
    }
}
