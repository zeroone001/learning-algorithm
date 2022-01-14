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

## 242. 有效的字母异位词

[242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* 
    使用排序的方法
    1. 先判断长度
    2. 再进行排序
    3. 转化成字符串进行比较
*/
var isAnagram = function(s, t) {
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
};
```

## 268. 丢失的数字

[268. 丢失的数字](https://leetcode-cn.com/problems/missing-number/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
    1. 先排序
    2. 然后，进行判断 [0, n-1]， 如果都没找到，执行第三步
    3. 直接return最后一个长度就是缺少的
*/
var missingNumber = function(nums) {
    const arr = [...nums].sort((a, b) => a - b);

    for (const [key, val] of arr.entries()) {
        if (key !== val) {
            return key;
        }
    }
    /* 注意这里，少了最后一个 */
    return arr.length;
};
```

## 349. 两个数组的交集

[349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

};
```
