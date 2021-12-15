# 数组

## 674. 最长连续递增序列

[https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)

#### 描述

给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

#### 示例

```shell
输入：nums = [1,3,5,4,7]
输出：3
解释：最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 
```



#### 题解

利用双指针来解决这个问题，

通过迭代，不断的计算一个最大的递增数



```js
/**
 * @param {number[]} nums
 * @return {number}
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

