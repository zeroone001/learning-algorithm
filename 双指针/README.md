# 双指针

## 977. 有序数组的平方

[977. 有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* 
    指定两个指针，从前往后，从后往前

*/
var sortedSquares = function(nums) {
    const res = [];
    for(let i = 0, j = nums.length-1; i<=j;) {
        const left = Math.abs(nums[i]);
        const right = Math.abs(nums[j]);
        /* 谁更大，先把谁放到数组 */
        if (left < right) {
            res.unshift(right * right);
            j--;
        } else {
            res.unshift(left * left);
            i++;
        }
    }
    return res;
};
```

## 27. 移除元素

[27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
};
```

## 128. 最长连续序列

[128. 最长连续序列](https://leetcode-cn.com/problems/longest-consecutive-sequence/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for(let val of set) {
        if (!set.has(val - 1)) {
            let count = 1;
            let cur = val;
            while (set.has(cur+1)) {
                count++;
                cur++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};
```