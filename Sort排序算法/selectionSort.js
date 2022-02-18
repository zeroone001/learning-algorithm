function selectionSort (arr) {
    if (arr.length <= 1) {return arr;}
    const length = arr.length;
    for (let index = 0; index < arr.length - 1; index++) {
        const element = arr[index];
        let minIndex = index;
        // 找到未排序的数组里面的最小值
        for (let j = i; j < length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            const tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
        
    }
    return arr;
}