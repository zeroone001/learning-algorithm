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

## 39. 组合总和

[39. 组合总和](https://leetcode-cn.com/problems/combination-sum/)

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

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

};
```