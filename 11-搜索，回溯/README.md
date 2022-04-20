# Search (BFS/DFS)（搜索/回溯）

## 17. 电话号码的字母组合

[17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number)

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) return [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    const res = [];

    const dfs = (cur, i) => {
        if(i < digits.length -1) {
            res.push(cur);
            return;
        }
        const letters = map[digits[i]];
        /* 关键 */
        for (const letter of letters) {
            dfs(cur + letter, i + 1);
        }
    }
    dfs('', 0);
    return res;
};
```


## 77. 组合

[77. 组合](https://leetcode-cn.com/problems/combinations/)

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let path = [];
    const combineHelper = (n, k, startIndex) => {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i <= n-(k-path.length) +1; ++i) {
            path.push(i);
            combineHelper(n, k, i+1);
            path.pop();
        }
    }
    combineHelper(n,k, 1);
    return res;
};
```

## 78. 子集

[78. 子集](https://leetcode-cn.com/problems/subsets/)

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let path = [];
    let res = [];
    const len = nums.length;
    const dfs = (cur, nums) => {
        if (cur === nums.length) {
            res.push([...path]);
            return;
        }
        path.push(nums[cur]);
        dfs(cur + 1, nums);
        path.pop();
        dfs(cur + 1, nums);
    }
    dfs(0, nums);
    return res;
};
```

## 47. 全排列 II

[47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

};
```

## 39. 组合总和

[39. 组合总和](https://leetcode-cn.com/problems/combination-sum/)

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if(target == 0) {
            res.push(combine);
            return;
        }
        dfs(target, combine, idx + 1);
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }

    dfs(target, [], 0);
    return res;
};
```


## 40. 组合总和 II

[40. 组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort();
    let result = [], combination = [];
    function dfs(nums, target, index, combination, result) {
         if(target === 0) {
             result.push([...combination])
         } else if(target > 0 && index < nums.length) {  // 剪枝
             dfs(nums, target, getNext(nums, index), combination, result);
             combination.push(nums[index]);
             dfs(nums, target - nums[index], index + 1, combination, result);
             combination.pop();
         }
     };
     dfs(candidates, target, 0, combination, result);
     return result;
};

function getNext(nums, index) {
    let next = index;
    while(next < nums.length && nums[next] === nums[index]) {
        next++;
    }
    return next;
}
```

## 784. 字母大小写全排列

[784. 字母大小写全排列](https://leetcode-cn.com/problems/letter-case-permutation/)

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {

};
```

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

## 79. 单词搜索

[79. 单词搜索](https://leetcode-cn.com/problems/word-search/)

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

};
```

## 542. 01 矩阵

[542. 01 矩阵](https://leetcode-cn.com/problems/01-matrix/)

```js
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {

};
```

## 934. 最短的桥

[934. 最短的桥](https://leetcode-cn.com/problems/shortest-bridge/)

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {

};
```

## 698. 划分为k个相等的子集

[698. 划分为k个相等的子集](https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {

};

```

## 93. 复原 IP 地址

[93. 复原 IP 地址](https://leetcode-cn.com/problems/restore-ip-addresses/)

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

};
```

## 131. 分割回文串

[131. 分割回文串](https://leetcode-cn.com/problems/palindrome-partitioning/)

```js
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

};
```

## 241. 为运算表达式设计优先级

[241. 为运算表达式设计优先级](https://leetcode-cn.com/problems/different-ways-to-add-parentheses/)

```js
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {

};
```

## 842. 将数组拆分成斐波那契序列

[842. 将数组拆分成斐波那契序列](https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence/)

```js
/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function(num) {

};
```