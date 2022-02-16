# 动态规划

## 70. 爬楼梯

[70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

```js
/**
 * @param {number} n
 * @return {number}
 */
/* 

*/
var climbStairs = function(n) {
    if (n < 4) return n;
    /* 初始化，跟菲波那切数列的区别是初始化的部分 */
    const arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        /* 递推公式 */
        arr[i] = arr[i-2] + arr[i-1];
    } 
    return arr[n];
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

## 剑指 Offer 10- I. 斐波那契数列

[剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n;
    const arr = [0, 1];
    const MOD = 1000000007;

    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 2] + arr[i - 1]) % MOD;
    }
    return arr[n];
};
```
