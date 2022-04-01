## 169. 多数元素

[169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b) => a-b);
    return nums[Math.floor(nums.length / 2)];
};
```

## 153. 寻找旋转排序数组中的最小值

[153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

```js
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left +right)/2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};
```

## 154. 寻找旋转排序数组中的最小值 II

这个题目跟上一题的区别是，数组里面的元素有重复

[154. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid
        } else {
            right -= 1;
        }
    }
    return nums[left];
};
```

## 912. 排序数组

[912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <=1) return nums;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j+1]) {
                let tmp = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = tmp;
            }
        }
    }
    return nums;
};
```

## 315. 计算右侧小于当前元素的个数

[315. 计算右侧小于当前元素的个数](https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = (nums) => {
  const len = nums.length;
  if (len == 0) return nums;
  const counts = new Array(len);
  const sorted = [];
  for (let i = len - 1; i >= 0; i--) {
    const index = findIndex(sorted, nums[i]); // 当前数字理应出现在右边排序后的位置，也即是有index个右边元素比它小
    sorted.splice(index, 0, nums[i]); // 将nums[i]插入到sorted数组的index处
    counts[i] = index; // 将index存到counts数组的索引i处
  }
  return counts;
};

const findIndex = (arr, target) => {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (arr[mid] < target) {// 目标值比mid元素大，mid不是想要的
      lo = mid + 1;         // 移到mid+1，lo是我最后想返回的
    } else {                // 目标值小于等于mid元素 
      hi = mid;             // mid可能是想要的，hi不能移到mid-1
    }
  }
  if (arr[lo] < target) return lo + 1; // 目标值比lo元素大，lo还需+1
  return lo;    // 否则 返回lo
};

```
