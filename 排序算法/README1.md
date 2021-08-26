## 三种排序O(nlogn)

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



## 排序链表



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



