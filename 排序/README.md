## 三种基础排序O(n^2) 冒泡排序， 插入排序， 选择排序

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

### 参考资料

## 三种排序O(nlogn) 归并排序 快速排序 希尔排序

1. 都是O(nlogn)，适合大规模的排序，比上面三个更加常用
2. 分治是一种解决问题的处理思想，递归是一种编程技巧
3. 归并排序，快速排序， 希尔排序

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

不稳定

快排的思想是这样的：

如果要排序数组中下标从p到r之间的一组数据，我们选择p到r之间的任意一个数据作为pivot（分区点）。

然后遍历p到r之间的数据，将小于pivot的放到左边，将大于pivot的放到右边，将povit放到中间。

经过这一步之后，数组p到r之间的数据就分成了3部分，前面p到q-1之间都是小于povit的，中间是povit，后面的q+1到r之间是大于povit的。根据分治、递归的处理思想，

我们可以用递归排序下标从p到q-1之间的数据和下标从q+1到r之间的数据，直到区间缩小为1，就说明所有的数据都有序了。



时间复杂度：O(nlogn)



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

本质上讲，希尔排序是插入排序的升级版本（分组+ 插入排序）

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
        // 注意这里插入排序不是一次性完成的，而是分组进行的
        // 下面这个for循环跟普通的插入排序是不一样的
        // 从分组里的第二个元素，开始往后遍历, 注意这里，分组里面的每个元素之间的间隔是gap
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



### 排序链表

在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

输入: 4->2->1->3
输出: 1->2->3->4

```js

function sortList (head) {
    return mergeSortList(head);
}

function mergeSortList (head) {
    if (!head || !head.next) return head;

    let middle = getMiddleNode(head);
    let tmp = middle.next;
    middle.next = null;
    let left = head;
    let right = tmp;

    // 执行递归
    left = mergeSortList(left);
    right = mergeSortList(right);

    return merge(left, right);
}

// 获取中间节点
// 利用快慢指针的方式去寻找
function getMiddleNode (head) {
    let slow = head;
    let fast = head;
    // 如果数量是偶数的话，返回第一个节点
    while (fast != null && fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}
// 一次归并操作
function merge (left, right) {
    let result = new ListNode(0);
    // 需要加一个指针
    let current = result;
    while (left && right) {
        if (left.value > right.value) {
            current.next = right;
            right = right.next;
        } else {
            current.next = left;
            left = left.next;
        }
        // 这里指针移动到下一位
        current = current.next;
    }

    result.next = left || right;

    // while (left != null) {
    //     result.next = left;
    //     left = left.next;
    // }
    // while (right != null) {
    //     result.next = right;
    //     right = right.next
    // }

    return result.next;

}
```

[https://mp.weixin.qq.com/s/N_6vAyZYdD41yoe7-KYfnw](https://mp.weixin.qq.com/s/N_6vAyZYdD41yoe7-KYfnw)

## 时间复杂度 O(n) 的排序算法 计数排序，桶排序，基数排序 

1. 时间复杂度 O(n)
2. 又叫做，线性排序
3. 下面三个排序算法是，不基于比较的排序算法，不涉及元素之间的比较
4. 对要排序的数据要求很苛刻，需要适用场景

### 计数排序 VS 桶排序 VS 基数排序

* 计数排序：每个桶只存单一键值（三种排序里面面试问的最多的还是计数排序）
* 桶排序： 每个桶存储一定范围的数值
* 基数排序：根据键值的每位数字来分配桶

### 计数排序

* 计数排序，不是基于**比较**的排序算法；
* 核心是将输入的数据值转化为键存储在额外开辟的数组空间中
* 是一种拿**空间换时间**的算法
* 计数排序只能用在数据范围不大的场景中，如果数据范围K要比排序的数据n大很多，就不适用计数排序了
* 要转化成非负整数

- 时间复杂度：**O(n+k)**
- 空间复杂度：**O(n+k)**

##### 原理

1. 先查找数组里最大的那个值；
2. 根据（最大的值+1）创建新的数组，用于将数据值转化为键存储,下标是[0,...,maxValue]
3. 存储：计算每个元素的个数，进行存储，这样就得到，以旧数组的值为下标，相同值的个数为值的新数组
4. 这里有个很巧妙的地方，就是bucket这个数组，相当于根据下标值排完序了
5. 直接从小到大进行遍历


```js
// n 代表数组的长度
function countSort (arr, n) {
    if (arr.length <= 1) return arr;
    // 先查找数组里最大的那个值；
    let maxValue = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] >= maxValue) {
            maxValue = arr[i];
        }
    }

    // 创建新的数组，用于将数据值转化为键存储
    // 下标是[0,...,maxValue]
    let bucket = new Array(maxValue + 1);

    // 计算每个元素的个数，进行存储
    // 这样就得到，以旧数组的值为下标，相同值的个数为值的新数组
    for (let i =0; i < n; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    // PS: 这里有个很巧妙的地方，就是bucket这个数组，相当于根据下标值排完序了
    // 所以，直接从小到大进行遍历就好了
    // 对这个新数组进行遍历
    let index = 0;
    for (let j = 0; j < maxValue + 1; j++) {
        // 当bucket有值的时候，赋给arr
        while (bucket[j] > 0) {
            arr[index++] = j;
            bucket[j]--;
        }
    }

}
```

### 桶排序

Bucket sort，桶排序是计数排序的升级

- 时间复杂度：O(n)
- 空间复杂度：O(n)



#### 原理

将要排序的数据，分到几个有序的桶里，每个桶里的数据再进行单独的排序。

桶内的排序完了，之后，再把每个桶里的数据依次的取出来，组成的序列就是有序的了。



桶排序比较适合用在外部排序之中。就是数据存储在外部磁盘当中，

数据量比较大，内存有限，无法将数据全部加载到内存中



#### 步骤

1. 遍历整个数组，找到最小的那个值，和最大的那个值
2. 判断多个桶，每个桶有一个范围，
3. 遍历数组，把数据放到每个桶里，
4. 桶里的数据进行单独排序
5. 最后依次取出，就完成桶排序了



### 基数排序



基数排序对要排序的数据是有要求的，需要分割出独立的位来比较，而且位之间有递进的关系，

如果a数据的高位比b数据大，那么剩下的低位就不用比较了

每一位的数据范围不能太大，要可以用线性排序算法来排序，

否则基数排序的时间复杂度就无法做到O（n）了



* 非比较排序
* 本质上是多关键字排序
* 桶思想的一种



#### 算法思想

假如有一个数组`[123,321,432,654]`，先取每个元素的个位数，进行计数排序，

排完之后，对新数组再继续用十位数排序，最后，给百位数进行计数排序，这样最后就得到排好的数组了



```js
//LSD Radix Sort
var counter = [];
function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
}
```

## 堆排序

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











