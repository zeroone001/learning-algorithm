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
