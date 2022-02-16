# 动态规划

## 70. 爬楼梯

[70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

};
```

## 509. 斐波那契数

[509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)

```js
/**
 * @param {number} n
 * @return {number}
 */
/* 最经典的动态规划 */
var fib = function(n) {
    /* 初始化 */
    const arr = [0, 1];
    if (n < 2) {
        return n;
    }
    for(let i = 2; i <= n; i++) {
        /* 递推公式 */
        arr[i] = arr[i-2] + arr[i - 1];
    }
    
    return arr[n];
};
```
