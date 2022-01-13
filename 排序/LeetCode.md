# 掘金

## 169. 多数元素

[169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
    多数是出现次数超过过一半
    1. 先排序
    2. 再找最中间的数字
*/
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[~~(nums.length/2)];
};
```

## 217. 存在重复元素

[217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const n = nums.length;
    const mySet = new Set(nums);
    return mySet.size === n ? false : true;
};
```

## 747. 至少是其他数字两倍的最大数

[747. 至少是其他数字两倍的最大数](https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let m1 = -1, m2 = -1;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m1) {
            m2 = m1;
            m1 = nums[i];
            index = i;
        } else if (nums[i] > m2) {
            m2 = nums[i];
        }
    }
    return m1 >= m2 * 2 ? index : -1;
};
```