## 排序

### 冒泡排序

平均时间复杂度： O(n^2)

```js

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

```


### 插入排序

时间复杂度： O(n^2)

原理： 首先，我们将数组中的数据分为两个区间，已排序区间和未排序区间。
初始已排序区间只有一个元素，就是数组的第一个元素。
插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。重复这个过程，直到未排序区间中元素为空，算法结束。

重点： 涉及到数据的移动

[147. 对链表进行插入排序](https://leetcode-cn.com/problems/insertion-sort-list/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (head == null) return;
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let lastSort = head; // 新链表的最后一个元素
    let cur = head.next;

    
    while (cur != null) {
        if (cur.val >= lastSort.val) {
            lastSort = lastSort.next;
        } else {
            let prev = dummyHead;
            while (prev.next.val <= cur.val) {
                prev = prev.next;
            }
            lastSort.next = cur.next;
            cur.next = prev.next;
            prev.next = cur;
        }
        cur = lastSort.next;
    }
    return dummyHead.next;
};
```



### 选择排序

时间复杂度： O(n^2)

重点： 进行数据位置交换

选择排序是一种不稳定的排序算法，相对于冒泡排序和插入排序就有点逊色了

原理： 从未排序的序列中找到最大（或最小的）放在已排序序列的末尾（为空则放在起始位置），重复该操作，知道所有数据都已放入已排序序列中

找到未排序数组部分，寻找最小值，然后，放在排序数组的末尾，进行交换


```js
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
```

### 下面两种排序适

都是O(nlogn)，适合大规模的排序，比上面三个更加常用

分治是一种解决问题的处理思想，递归是一种编程技巧

### 归并排序

缺点： 不是原地排序

原理： 如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。

```js
function mergeSort(arr) {
  let array = mergeSortRec(arr)
  return array
}

// 若分裂后的两个数组长度不为 1，则继续分裂
// 直到分裂后的数组长度都为 1，
// 然后合并小数组
function mergeSortRec(arr) {
  let length = arr.length
  if(length === 1) {
    return arr
  }
  let mid = Math.floor(length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, length)
  return merge(mergeSortRec(left), mergeSortRec(right))
}

// 顺序合并两个小数组left、right 到 result
function merge(left, right) {
  let result = [],
      ileft = 0,
      iright = 0
  while(ileft < left.length && iright < right.length) {
    if(left[ileft] < right[iright]){
      result.push(left[ileft ++])
    } else {
      result.push(right[iright ++])
    }
  }
  while(ileft < left.length) {
    result.push(left[ileft ++])
  }
  while(iright < right.length) {
    result.push(right[iright ++])
  }
  return result
}

// 测试
let arr = [1, 3, 2, 5, 4]
console.log(mergeSort(arr)) // [1, 2, 3, 4, 5]
```


### 快速排序

快排的思想是这样的：如果要排序数组中下标从 p 到 r 之间的一组数据，我们选择 p 到 r 之间的任意一个数据作为 pivot（分区点）。

快排的思想是这样的：如果要排序数组中下标从p到r之间的一组数据，我们选择p到r之间的任意一个数据作为pivot（分区点）。然后遍历p到r之间的数据，将小于pivot的放到左边，将大于pivot的放到右边，将povit放到中间。经过这一步之后，数组p到r之间的数据就分成了3部分，前面p到q-1之间都是小于povit的，中间是povit，后面的q+1到r之间是大于povit的。根据分治、递归的处理思想，我们可以用递归排序下标从p到q-1之间的数据和下标从q+1到r之间的数据，直到区间缩小为1，就说明所有的数据都有序了。

1. 首先从序列中选取一个数作为基准数
2. 将比这个数大的数全部放到它的右边，把小于或者等于它的数全部放到它的左边 （一次快排 partition）
3. 然后分别对基准的左右两边重复以上的操作，直到数组完全排序
```js
let quickSort = (arr) => {
  quick(arr, 0 , arr.length - 1)
}

let quick = (arr, left, right) => {
  let index
  if(left < right) {
    // 划分数组
    index = partition(arr, left, right)
    if(left < index - 1) {
      quick(arr, left, index - 1)
    }
    if(index < right) {
      quick(arr, index, right)
    }
  }
}

// 一次快排
let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
      i = left,
      j = right
  // 开始调整
  while(i <= j) {
    
    // 左指针右移
    while(arr[i] < datum) {
      i++
    }
    
    // 右指针左移
    while(arr[j] > datum) {
      j--
    }
    
    // 交换
    if(i <= j) {
      swap(arr, i, j)
      i += 1
      j -= 1
    }
  }
  return i
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 测试
let arr = [1, 3, 2, 5, 4]
quickSort(arr)
console.log(arr) // [1, 2, 3, 4, 5]
// 第 2 个最大值
console.log(arr[arr.length - 2])  // 4
```




### 希尔排序

1959年Shell发明，第一个突破 O(n^2^) 的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素

时间复杂度：O(nlogn)
空间复杂度：O(1)
不稳定排序

本质上讲，希尔排序是插入排序的升级版本

又叫，缩小增量排序

原理，
1. 就是把序列进行分组，组内进行插入排序；这个时候从宏观上来看是有序的，
2. 最后一次进行插入排序，无须多次位移或者交换

[希尔排序参考资料https://juejin.cn/post/6844904007182319624](https://juejin.cn/post/6844904007182319624)

```js
function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 这里太巧妙了，这里并不是一个组排序完成，再下个组，每次的增加都是一个组
        for (let i = gap; i < n; i++) {
            let j = i;
            let current = arr[i];
            
            while (j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}
```

### 桶排序




### 参考资料

[https://mp.weixin.qq.com/s/N_6vAyZYdD41yoe7-KYfnw](https://mp.weixin.qq.com/s/N_6vAyZYdD41yoe7-KYfnw)