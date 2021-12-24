function bubbleSort (arr) {
    if (arr.length <= 1) return arr;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let flag = false;
        for (let j = 0; j <= n - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // 交换
                const tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                flag = true;
            }
        }
        if (!flag) break;
    }
    return arr;

}