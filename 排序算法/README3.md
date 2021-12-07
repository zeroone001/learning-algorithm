## 最后一个排序算法，堆排序


不稳定

- 将原序列（n个）转化成一个大顶堆
- 设置堆的有效序列长度为 n
- 将堆顶元素（第一个有效序列）与最后一个子元素（最后一个有效序列）交换，并有效序列长度减1
- 堆化有效序列，使有效序列重新称为一个大顶堆
- 重复以上2步，直到有效序列的长度为 1，排序完成



```js
function heapSort(items) {
    // 构建大顶堆
    buildHeap(items, items.length-1)
    // 设置堆的初始有效序列长度为 items.length - 1
    let heapSize = items.length - 1
    for (var i = items.length - 1; i > 1; i--) {
        // 交换堆顶元素与最后一个有效子元素
        swap(items, 1, i);
        // 有效序列长度减 1
        heapSize --;
        // 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)
        heapify(items, heapSize, 1);
    }
    return items;
}

// 原地建堆
// items: 原始序列
// heapSize: 有效序列长度
function buildHeap(items, heapSize) {
    // 从最后一个非叶子节点开始，自上而下式堆化
    for (let i = Math.floor(heapSize/2); i >= 1; --i) {    
        heapify(items, heapSize, i);  
    }
}
function heapify(items, heapSize, i) {
    // 自上而下式堆化
    while (true) {
        var maxIndex = i;
        if(2*i <= heapSize && items[i] < items[i*2] ) {
            maxIndex = i*2;
        }
        if(2*i+1 <= heapSize && items[maxIndex] < items[i*2+1] ) {
            maxIndex = i*2+1;
        }
        if (maxIndex === i) break;
        swap(items, i, maxIndex); // 交换 
        i = maxIndex; 
    }
}  
function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

// 测试
var items = [,1, 9, 2, 8, 3, 7, 4, 6, 5]
heapSort(items)
// [empty, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

