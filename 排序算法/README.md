## 三种基础排序O(n^2)

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

[https://mp.weixin.qq.com/s/N_6vAyZYdD41yoe7-KYfnw](https://mp.weixin.qq.com/s/N_6vAyZYdD41yoe7-KYfnw)