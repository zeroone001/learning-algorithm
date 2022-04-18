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