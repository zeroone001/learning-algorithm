## 数据结构与算法之数组

https://leetcode-cn.com/leetbook/read/binary-search/x6q6fi/


### 二分查找

#### 定义

二分查找，也叫做折半查找，是指在有序数组中查找指定元素的搜索算法

1. 从有序数组的中间元素进行搜索，如果找到，就直接返回
2. 如果目标元素大于中间元素，那么就去右侧区域查找
3. 如果目标元素小于中间元素，就在左侧区域查找
4. 

#### JS实现

```js
// 非递归方法，用的迭代
function binary_search(arr, key) {
  let left = 0; // 定义下标值
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left+right) / 2);
    if (key === arr[mid]) return mid;
    if (arr[mid] > key) {
      // key 在左侧区间
      right = mid - 1;
    }
    if (arr[mid] < key) {
      // key 在右侧区间
      left = mid + 1;
    }
  }
  return -1;
}
// 递归算法
function binary_search(arr, key) {
  if (low > high){
       return -1;
        }
     var mid = parseInt((high + low) / 2);
      if(arr[mid] == key){
        return mid;
     }else if (arr[mid] > key){
        high = mid - 1;
        return binary_search(arr, low, high, key);
     }else if (arr[mid] < key){
        low = mid + 1;
        return binary_search(arr, low, high, key);
     }
}
```

# 二分查找

## 704. 二分查找

[704. 二分查找](https://leetcode-cn.com/problems/binary-search/)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right){
        let mid = Math.floor((right + left) / 2);
        if (target === nums[mid]) {
            return mid;
        } 
        if (target > nums[mid]) {
            left = mid + 1;
        } 
        if (target < nums[mid]) {
            right = mid - 1;
        } 
    }
    return -1;
};
```

## 278. 第一个错误的版本

[278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)

```js
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return function(n) {
        let left = 1;
        let right = n;
        let res = 1;
        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            }else {
                left = mid + 1;
            }
        }
        return left;
    };
};
```

## 35. 搜索插入位置

[35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let res = 0;
    while (left <= right){
        let mid = Math.floor((right + left) / 2);
        if (target === nums[mid]) {
            return mid;
        } 
        if (target > nums[mid]) {
            left = mid + 1;
            res = left
        } 
        if (target < nums[mid]) {
            right = mid - 1;
        } 
    }
    return res;
};
```

## 374. 猜数字大小

[374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

```js
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while(left < right) {
      let mid = Math.floor((left + right) / 2);
      const g = guess(mid);
      if (g === 0) return mid;
      if (g === -1) {
        right = mid - 1;
      } 
      if (g === 1) {
        left = mid + 1;
      }

    }
    return left;
};
```

## 面试题 10.03. 搜索旋转数组

[面试题 10.03. 搜索旋转数组](https://leetcode-cn.com/problems/search-rotate-array-lcci/)

这个的难点是里面有重复的值

```js
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (left == right && arr[left] !== target) {
      return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      /* 循环，去找最小的那个索引 */
      while (mid > 0 && arr[mid] == arr[mid -1]) {
        mid--;
      }
      /* 这里有可能是第一个的情况 */
      if(arr[0] == target) {
        return 0
      }
      return mid;
    }
    //arr[mid] == arr[left] 则缩短数组左边界
    while(left < mid && arr[mid] == arr[left]){
        left++;
    }
    //arr[mid] == arr[right] 则缩短数组右边界
    while(right > mid && arr[mid] == arr[right]){
        right--;
    }
    if (arr[mid] >= arr[left]) {
      /* 左边有序 */
      /* 目标在左边部分 */
      if(target < arr[mid] && target >= arr[left]) {
        right = mid -1;
      } else {
        left = mid +1;
      }
    } else {
      /* 右边有序 */
      if(target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
```

## 33. 搜索旋转排序数组

中等

这个简单一些，因为里面没有重复的值

使用二分查找



[33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

```js
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
/* 
  旋转数组的特点是至少有一半是有序的，
  因此，每次二分之后，只需要判断要寻找的目标是否在有序的那一半数组中即可

  时间复杂度： O(\log n)O(logn)，其中 nn 为 \textit{nums}nums 数组的大小。整个算法时间复杂度即为二分查找的时间复杂度 O(\log n)O(logn)
*/
var search = function(nums, target) {
  const n = nums.length;
  if (!n) return -1;
  if (n == 1) {
    return nums[0] == target ? 0 : -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const leftVal = nums[left];
    const rightVal = nums[right];
    const midVal = nums[mid];

    if (midVal == target) {
      return mid;
    }
    /* 这里是关键代码，因为总有一侧是有序的 */
    if (midVal >= leftVal) { /* 左边有序 */
      if(target < midVal && target >= leftVal) {
        /* 目标在左边部分 */
        right = mid - 1;
      } else {
        /* 目标在右边部分 */
        left = mid + 1;
      }
    } else {
      /* 右边有序 */
      if(target > midVal && target <= rightVal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
```

## 189. 轮转数组

中等

[189. 轮转数组](https://leetcode-cn.com/problems/rotate-array/)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
  1， 先反转整个数组
  2， 通过k 分为两个部分
  3， 分别反转两个部分
*/
var rotate = function(nums, k) {
  const reverse = (arr, start, end) => {
    while(start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  if (nums.length === 0) return [];
  if (nums.length === 1) return nums;
  /* 有可能k 大于这个length */
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};
```

## 153. 寻找旋转排序数组中的最小值

[153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

最小值，跟数组中的最后一个值，进行比较

这里有个特性，最后一个值，比最小值的左侧都小，比最小值的右侧都大

```js
  /**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let little = 0;
  let large = nums.length - 1;
  while (little < large) {
    let mid = Math.floor((little + large) / 2);
    if (nums[mid] > nums[large]) {
      /* 利用特性，跟最后一个值进行比较 */
      little = mid + 1;
    } else {
      large = mid;
    }
  }
  return nums[little];
};
```

## 154. 寻找旋转排序数组中的最小值 II


[154. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)

这个是困难难度，因为里面有重复的值

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      /* 这个是解决有重复值的问题 */
      right -= 1;
    }
  }
  return nums[left];
};
```

## 81. 搜索旋转排序数组 II

[81. 搜索旋转排序数组 II](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  const n = nums.length;
  if (n === 0) {
      return false;
  }
  if (n === 1) {
      return nums[0] === target;
  }
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left == right && nums[left] == target) {
        return true; 
    }
    let mid = (left + right) >> 1;

    if (nums[mid] === target) {
      return true;
    }
    if (nums[left] == nums[mid]) {
        left++;
        continue;
    }
    if (nums[mid] >= nums[left]) {
      /* 左侧有序 */
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      /* 右侧有序 */
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
```

# 掘金

## 寻找峰值

[162. 寻找峰值](https://leetcode-cn.com/problems/find-peak-element/)

要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值

如果 m 较大，则左侧存在峰值，r = m，如果 m + 1 较大，则右侧存在峰值，l = m + 1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (nums[mid] > nums[mid + 1]) {
          right = mid;
      } else {
          left = mid + 1;
      }
    }
    return left;
};
```
