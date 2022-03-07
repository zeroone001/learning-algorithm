# hot 100

## 22. 括号生成

[22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

};
```

## 136. 只出现一次的数字

[136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for (let val of nums) {
        res ^= val;
    }
    return res;
};
```

## 155. 最小栈

[155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

```js
var MinStack = function() {
    this.x_stack = [];
    this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
    this.x_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
    this.x_stack.pop();
    this.min_stack.pop();
};

MinStack.prototype.top = function() {
    return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length - 1];
};

```

## 283. 移动零

[283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]; 
            j++;
        }
    }
    for(let i = j; i<len; i++) {
        nums[i] = 0;
    }
};
```

## 338. 比特位计数

[338. 比特位计数](https://leetcode-cn.com/problems/counting-bits/)

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n+1).fill(0);
    for (let i = 0; i <= n; i++) {
        res[i] = countOnes(i);
    }
    return res;

};
var countOnes = (i) => {
    let count = 0;
    while(i >0) {
        i &= (i-1);
        count++;
    }
    return count;
}
```

## 448. 找到所有数组中消失的数字

[448. 找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    let set = new Set(nums);
    let n = nums.length;
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            res.push(i);
        }
    }
    return res;
};
```

## 461. 汉明距离

[461. 汉明距离](https://leetcode-cn.com/problems/hamming-distance/)

```js
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let res = x ^ y;
  let count = 0;
  while (res) {
    count++;
    res = res & (res - 1);
  }
  return count;
};
```