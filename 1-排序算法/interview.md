## 关于排序算法的面试题



### 一，介绍一下快排原理以及时间复杂度，并实现一个快排



快排使用了分治的思想，分而治之，将复杂的问题，分解为多个相似的子问题，把子问题再分解为更小的子问题，最后原问题的解，就是子问题的合并。（这种问题，一般要**递归**来解决）



- 时间复杂度：O(nlogn)
- 空间复杂度：O(nlogn)



#### 简单步骤



1. 从序列中选择一个数，作为基准数，可以选中间项`arr[Math.floor(Math.random() * (right - left + 1)) + left]`
2. 遍历数组，把小于基准数的放左边，大于基准数的放右边（一次快排partition）
3. 分别对基准数的左右两边，重复以上的操作，直到数组完全排序。



#### Partition 一次快排

1. 选择一个数组的中间项作为基准数；

2. 定义两个指针，分别指向数组的最左端和最右端；
3. 左指针开始往右移动，跟基准数进行比较，遇到比基准数大的暂停；
4. 右指针同时往左移动，跟基准数进行比较，遇到比基准数小的暂停，然后，交换左右指针指向的元素；
5. 重复，3，4，直到左指针超过右指针，这个时候，比基准小的值放在了左边，比基准大的值放在了基准数的右边；
6. 分别重复基准的左右两边，递归操作，直到数组完全排序；



#### 代码实现

```js
function quickSort (arr) {
    quick(arr, 0, arr.length - 1);
}
function quick (arr, left, right) {
    if (left < right) {
        let index = partition(arr, left, right);

        // 递归
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }

        if (index < right) {
            quick(arr, index, right);
        }

    }
}
function partition (arr, left, right) {
    // 定义两个指针
    let i = left;
    let j = right;

    // 获取基准值
    let pivot = Math.floor(Math.random(right - left + 1) + left);

    while (i < j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        // 交换
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }

    }

    return i;
}
function swap (arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

```



## 打乱一个数组



```js
class Solution {
  constructor (arr) {
    this.arr = arr;
  }
  reset () {
    return this.arr;
  }
  shuffle () {
    let res = [...this.arr];
    let n = res.length;
    for(let i = n-1; i >= 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1))
        this.swap(res, randIndex, i)
    }
    return res
  }
  swap (arr, i, j) {
    let 
  }
  
}
let solute = new Solution([3,2,1,4,5]);
// 打乱数组
solute.shuffle();
```



## 阿里五面：说下希尔排序的过程？希尔排序的时间复杂度和空间复杂度又是多少？



希尔排序也叫做，缩小增量排序

1. 把数列按照增量，进行分组
2. 组内进行，插入排序
3. 增量不断递减，执行，1，2
4. 最后增量为1，最终执行一遍插入排序



- 时间复杂度：O(nlogn)
- 空间复杂度：O(1)



```js
function shellSort (arr) {
  const n = arr.length;
  for (let gap = Math.floor(arr / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 开始进行插入排序
    for (let i = gap; i < n; i++) {
      let j = i;
      let current = arr[i];
      while (j-gap > 0 && arr[j-gap] > current) {
           arr[j] = arr[j-gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
}


```



## 不稳定的排序算法


选择排序，希尔排序，快速排序，堆排序

## 14 | 排序优化：如何实现一个通用的、高性能的排序函数？

* Java 语言使用堆排序实现的排序算法
* C语言使用的快速排序实现排序函数
* 

