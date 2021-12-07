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
    while (left < right){
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