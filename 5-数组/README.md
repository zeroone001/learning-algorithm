# 数组

>有没有想过为啥只有二叉树，而没有一叉树。实际上链表就是特殊的树，即一叉树

对数组头部的插入和删除时间复杂度都是$O(N)$，而平均复杂度也是$O(N)$，
只有对尾部的插入和删除才是$O(1)$

数组对查询特别友好，对删除和添加不友好


## 674. 最长连续递增序列

[674. 最长连续递增序列](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
  利用双指针来解决这个问题，
通过迭代，不断的计算一个最大的递增数
*/
var findLengthOfLCIS = function(nums) {
	const num = nums.length;
  if (nums === 0) return 0;
  let left = 0;
  let right = 1;
  // 这里要一定要注意，一定要设置成1，这里是关键
  let maxValue = 1;
  let count = 1;
  while (right < num) {
    if (nums[left] < nums[right] ) {
      count++;
    } else {
      count = 1;
    }
    left++;
    right++;
    maxValue = Math.max(count, maxValue);
  }
  return maxValue;
};
```


## 4. 寻找两个正序数组的中位数


[4. 寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let n1 = nums1.length;
    let n2 = nums2.length;

    // 两个数组总长度
    let len = n1 + n2;

    // 保存当前移动的指针的值(在nums1或nums2移动)，和上一个值
    let preValue = -1;
    let curValue = -1;

    //  两个指针分别在nums1和nums2上移动
    let point1 = 0;
    let point2 = 0;

    // 需要遍历len/2次，当len是奇数时，最后取curValue的值，是偶数时，最后取(preValue + curValue)/2的值
    for (let i = 0; i <= Math.floor(len/2); i++) {
        preValue = curValue;
        // 需要在nums1上移动point1指针
        if (point1 < n1 && (point2 >= n2 || nums1[point1] < nums2[point2])) {
            curValue = nums1[point1];
            point1++;
        } else {
            curValue = nums2[point2];
            point2++;
        }
    }
    
    return len % 2 === 0 
        ? (preValue + curValue) / 2
        : curValue
};
```

## 66. 加一

[66. 加一](https://leetcode.cn/problems/plus-one/)

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;
    for (let i = n - 1; i >= 0; --i) {
        // 假如这是倒数第二个
        if (digits[i] !== 9) {
            ++digits[i]; // +1
            // 下一个设置成0
            for (let j = i + 1; j < n; ++j) {
                digits[j] = 0;
            }
            return digits;
        }
    }

    // digits 中所有的元素均为 9
    const ans = new Array(n + 1).fill(0);
    ans[0] = 1;
    return ans;
};
```

## 219. 存在重复元素 II

[219. 存在重复元素 II](https://leetcode.cn/problems/contains-duplicate-ii/)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

};
```

## 228. 汇总区间

[228. 汇总区间](https://leetcode.cn/problems/summary-ranges/)

```js
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
       const ret = [];
    let i = 0;
    const n = nums.length;
    while (i < n) {
        const low = i;
        i++;
        while (i < n && nums[i] === nums[i - 1] + 1) {
            i++;
        }
        const high = i - 1;
        const temp = ['' + nums[low]];
        if (low < high) {
            temp.push('->');
            temp.push('' + nums[high]);
        }
        ret.push(temp.join(''));
    }
    return ret;
};
```

## 303. 区域和检索 - 数组不可变

[303. 区域和检索 - 数组不可变](https://leetcode.cn/problems/range-sum-query-immutable/)

```js
var NumArray = function(nums) {
    const n = nums.length;
    this.sums = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};

```

## 414. 第三大的数

[414. 第三大的数](https://leetcode.cn/problems/third-maximum-number/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums.sort((a, b) => a - b);
  nums.reverse();
    for (let i = 1, diff = 1; i < nums.length; ++i) {
        if (nums[i] !== nums[i - 1] && ++diff === 3) { // 此时 nums[i] 就是第三大的数
            return nums[i];
        }
    }
    return nums[0];
};
```

[598. 范围求和 II](https://leetcode.cn/problems/range-addition-ii/)

```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {

};
```
## 463. 岛屿的周长

[463. 岛屿的周长](https://leetcode.cn/problems/island-perimeter/)

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

};
```

## 496. 下一个更大元素 I

[496. 下一个更大元素 I](https://leetcode.cn/problems/next-greater-element-i/)

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

};
```