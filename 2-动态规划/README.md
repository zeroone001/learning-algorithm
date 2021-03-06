# DP（动态规划）

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

## 70. 爬楼梯

[70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

```js
/**
 * @param {number} n
 * @return {number}
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

## 300. 最长递增子序列

[300. 最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const len = nums.length;
    let dp = new Array(len).fill(1);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};
```

## 121. 买卖股票的最佳时机

[121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    let maxprice = prices[n - 1];
    let result = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (maxprice > prices[i]) {
            result = Math.max(result, maxprice - prices[i]);
        } else {
            maxprice = prices[i];
        }
    }

    return result;
};
```

## 53. 最大子数组和

[53. 最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prevNum = 0;
    let maxRes = nums[0];
    nums.forEach((item) => {
        prevNum = Math.max(prevNum + item, item);
        maxRes = Math.max(maxRes, prevNum);
    });
    return maxRes;
};
```

## 剑指 Offer II 003. 前 n 个数字二进制中 1 的个数

[剑指 Offer II 003. 前 n 个数字二进制中 1 的个数](https://leetcode-cn.com/problems/w3tCBm/)

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        bits[i] = countOnes(i);
    }
    return bits
};

const countOnes = (x) => {
    let ones = 0;
    while (x > 0) {
        x &= (x - 1);
        ones++;
    }
    return ones;
}
```

## 118. 杨辉三角

[118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [];
    for(let i = 0; i < numRows; i++) {
        let rows = new Array(i + 1).fill(1);
        /* 第一个与最后一个 都是1 */
        for(let j = 1; j < rows.length - 1; j++) {
            rows[j] = res[i - 1][j-1] + res[i-1][j];
        }
        res.push(rows);
    }
    return res;
};
```

## 119. 杨辉三角 II

[119. 杨辉三角 II](https://leetcode-cn.com/problems/pascals-triangle-ii/)

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const res = [];
    for(let i = 0; i <= rowIndex; i++) {
        let rows = new Array(i+1).fill(1);
        for (let j = 1; j < rows.length -1; j++) {
            rows[j] = res[i-1][j-1] + res[i-1][j];
        }
        res.push(rows);
    }
    console.log(res);
    return res[rowIndex];
};
```

## 746. 使用最小花费爬楼梯

[746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)

```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

};
```

## 1137. 第 N 个泰波那契数

[1137. 第 N 个泰波那契数](https://leetcode.cn/problems/n-th-tribonacci-number/)

```js
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {

};
```