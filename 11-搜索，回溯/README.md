# Search (BFS/DFS)（搜索/回溯）

主要是利用递归实现

分为下面几种

1. 组合
2. 子集
3. 切割
4. 排列

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
        if(i > digits.length -1) {
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

## 77. 组合 经典

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
        for (let i = startIndex; i <= n; i++) {
            path.push(i);
            combineHelper(n, k, i + 1);
            /* 回溯 */
            path.pop();
        }
    };
    combineHelper(n, k, 1);
    return res;
};
```


## 39. 组合总和 经典

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
        /* 已经遍历完了，不往下执行 */
        if (idx === candidates.length) {
            return;
        }
        /* 已经找到了合适的，直接push */
        if(target == 0) {
            res.push(combine);
            return;
        }
        dfs(target, combine, idx + 1);
        /* target 执行减法 */
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

## 131. 分割回文串

[131. 分割回文串](https://leetcode-cn.com/problems/palindrome-partitioning/)

```js
/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
        if(s[i] !== s[j]) return false;
    }
    return true;
}

var partition = function(s) {
    const res = [], path = [], len = s.length;
    function backtracking(i) {
        if(i >= len) {
            res.push(Array.from(path));
            return;
        }
        for(let j = i; j < len; j++) {
            if(!isPalindrome(s, i, j)) continue;
            path.push(s.substr(i, j - i + 1));
            backtracking(j + 1);
            path.pop();
        }
    }
    backtracking(0);
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
    const res = [];
    const vis = new Array(nums.length).fill(false);
    const backtrack = (idx, perm) => {
        if (idx === nums.length) {
            res.push(perm.slice());
            return;
        }
        for (let i = 0; i < nums.length; ++i) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            }
            perm.push(nums[i]);
            vis[i] = true;
            backtrack(idx + 1, perm);
            vis[i] = false;
            perm.pop();
        }
    }
    nums.sort((x, y) => x - y);
    backtrack(0, []);
    return res;
};
```

## 784. 字母大小写全排列

[784. 字母大小写全排列](https://leetcode-cn.com/problems/letter-case-permutation/)

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let res = [];
    const dfs = (i, str) => {
        /* 把数字类型的加上 */
        while (!isNaN(s[i])) {
            str += s[i++];
        }
        if (i == s.length) {
            res.push(str);
            return;
        }

        dfs(i+1, str + s[i].toLowerCase());
        dfs(i+1, str + s[i].toUpperCase());
    }
    dfs(0, '');
    return res;
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
    const res = [];
    // 左右括号所剩的数量，str是当前字符串
    const dfs = (left, right, str) => {
        if (str.length == n * 2) {
            res.push(str);
            return;
        }
        // 只要左括号有剩，就可以选它，然后继续做选择（递归）
        if (left > 0) {
            dfs(left - 1, right, str + '(');
        }
        // 右括号比左括号剩的多，才能选右括号
        if (left < right) {
            dfs(left, right - 1, str + ')');
        }
    }

    dfs(n,n,'');
    return res;
};
```

## 79. 单词搜索

[79. 单词搜索](https://leetcode-cn.com/problems/word-search/)

```js
var exist = function (board, word) {
  const rows = board.length,
    cols = board[0].length;
  // 方向数组，方便从某一个元素向上下左右找相邻元素扩散
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // 存储对应索引位上是否已遍历过了
  const visited = new Array(rows)
    .fill(false)
    .map(() => new Array(cols).fill(false));

  const dfs = (i, j, k) => {
    // 矩阵索引位 i j中元素跟要找的字符串元素不相等，就直接返回false
    if (board[i][j] != word.charAt(k)) return false;
    // 前面的都已经匹配成功 k才会增长到字符串的最大长度位
    else if (k == word.length - 1) return true;
    visited[i][j] = true;
    // 从矩阵索引位i j向上下左右遍历查找
    for (const [dx, dy] of directions) {
      let newI = i + dx,
        newJ = j + dy;
      // 在矩阵索引范围内 并且没有访问过
      if (
        newI >= 0 &&
        newI < rows &&
        newJ >= 0 &&
        newJ < cols &&
        !visited[newI][newJ]
      ) {
        // 深度优先搜索
        const flag = dfs(newI, newJ, k + 1);
        if (flag) {
          return true;
        }
      }
    }
    visited[i][j] = false;
    return false;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == word[0]) {
        // 从矩阵的任一一个元素点开始向四周扩散查找
        const flag = dfs(i, j, 0);
        // 找到了就可以立即返回了
        if (flag) {
          return true;
        }
      }
    }
  }
  return false;
};
```

## 542. 01 矩阵

[542. 01 矩阵](https://leetcode-cn.com/problems/01-matrix/)

```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    if(!matrix.length || !matrix[0].length) return null;

    let n = matrix.length;
    let m = matrix[0].length;
    let ans = new Array(n);
    for(let i = 0; i < n; i++) ans[i] = new Array(m).fill(-1);

    for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) ans[i][j] = 0;
            else ans[i][j] = bfs(i, j);
        }

    return ans;

    function bfs(row, col) {
        let queue = [[row, col]];
        let visited = new Array(n);
        let dist = 0;
        for(let i = 0; i < n; i++) visited[i] = new Array(m).fill(false);
        visited[row][col] = true;
        while(queue.length) {
            let len = queue.length;
            dist++;
            for(let i = 0; i < len; i++) {
                let top = queue.shift(); 

                if(top[0] + 1 < n && !visited[top[0]+1][top[1]]) {
                    if(matrix[top[0]+1][top[1]] === 0) return dist;
                    queue.push([top[0]+1, top[1]]);
                    visited[top[0]+1][top[1]] = true;
                }
                if(top[0] - 1 >= 0 && !visited[top[0]-1][top[1]]) {
                    if(matrix[top[0]-1][top[1]] === 0) return dist;
                    queue.push([top[0]-1, top[1]]);
                    visited[top[0]-1][top[1]] = true;
                }
                if(top[1] + 1 < m && !visited[top[0]][top[1]+1]) {
                    if(matrix[top[0]][top[1]+1] === 0) return dist;
                    queue.push([top[0], top[1]+1]);
                    visited[top[0]][top[1]+1] = true;
                }
                if(top[1] - 1 >= 0 && !visited[top[0]][top[1]-1]) {
                    if(matrix[top[0]][top[1]-1] === 0) return dist;
                    queue.push([top[0], top[1]-1]);
                    visited[top[0]][top[1]-1] = true;
                }
            }
        }
    }
};
```

## 934. 最短的桥

[934. 最短的桥](https://leetcode-cn.com/problems/shortest-bridge/)

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
function shortestBridge(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  // 方向数组
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];
  const dfs = (i, j) => {
    // 1代表陆地  岛是由四面相连的 1 形成的一个最大组
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== 1) return;
    // 标记小岛2
    grid[i][j] = 2;
    // 初始化queue（记录小岛2的坐标）
    queue.push([i, j]);
    for (let [x, y] of directions) {
      dfs(i + x, j + y);
    }
  };
  const bfs = () => {
    let step = 0;
    while (queue.length) {
      let size = queue.length;
      step++;
      while (size--) {
        const [i, j] = queue.shift();
        // 出队列向四周扩散
        for (let [x, y] of directions) {
          const newI = i + x;
          const newJ = j + y;
          if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
            // 找到小岛1，直接返回
            // 找到空白，继续前进搜寻
            if (grid[newI][newJ] === 1) {
              return step - 1;
            } else if (grid[newI][newJ] === 0) {
              // 先把它融入小岛1中避免重复访问到
              grid[newI][newJ] = 2;
              queue.push([newI, newJ]);
            }
          }
        }
      }
    }
  };
  // 标记小岛2 之所以用dfs是需要把当前岛上所有的陆地都遍历到并且加入队列
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 从任一一个陆地节点出发去找到它所在的岛屿，
      if (grid[i][j] === 1) {
        dfs(i, j);
        return bfs();
      }
    }
  }
  return -1;
}
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
  const total = nums.reduce((total, num) => total + num, 0)
  const target0 = total / k // 目标组合的和
  if (target0 !== Math.floor(target0)) return false
  let used = new Array(nums.length).fill(false)
  nums.sort((a, b) => a - b) // 从小到大排序
  // 如果找到 k - 1 个目标组合，那么剩下的数肯定能组成第 k 个目标组合
  return dfs(target0, k - 1, 0, used, nums)

  // 返回是否找到 k 个目标组合，
  // target 表示当前组合还可以容纳多大的数
  function dfs(target, k, start, used, nums) {
    // 找到一个目标组合，接着找下一个目标组合
    if (target === 0) return dfs(target0, k - 1, 0, used, nums)
    if (k === 0) return true // 已找到所有目标组合
    // 尝试将每个数放入当前组合
    // 因为是找组合，无需回头尝试，比如组合 {a, b} 和组合 {b, a} 是等价的
    for (let i = start; i < nums.length; ++i) {
      if (used[i]) continue
      const num = nums[i]
      // 可行性剪枝: 
      // num 无法构成目标组合
      // nums 从小到大排序，既然 nums[i] 都偏大了， nums[i + 1] 更加偏大，无需尝试
      if (num > target) return false

      used[i] = true
      const got = dfs(target - num, k, i + 1, used, nums) // 找当前组合的下一个数
      if (got) return got
      used[i] = false
    }
    return false
  }
}

```

## 93. 复原 IP 地址

[93. 复原 IP 地址](https://leetcode-cn.com/problems/restore-ip-addresses/)

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const SEG_COUNT = 4;
    const segments = new Array(SEG_COUNT);
    const ans = [];

    const dfs = (s, segId, segStart) => {
        // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
        if (segId === SEG_COUNT) {
            if (segStart === s.length) {
                ans.push(segments.join('.'));
            }
            return;
        }

        // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
        if (segStart === s.length) {
            return;
        }

        // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
        if (s.charAt(segStart) === '0') {
            segments[segId] = 0;
            dfs(s, segId + 1, segStart + 1);
        }

        // 一般情况，枚举每一种可能性并递归
        let addr = 0;
        for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
            addr = addr * 10 + (s.charAt(segEnd) - '0');
            if (addr > 0 && addr <= 0xFF) {
                segments[segId] = addr;
                dfs(s, segId + 1, segEnd + 1);
            } else {
                break;
            }
        }
    }

    dfs(s, 0, 0);
    return ans;
};
```



## 241. 为运算表达式设计优先级

[241. 为运算表达式设计优先级](https://leetcode-cn.com/problems/different-ways-to-add-parentheses/)

```js
/**
 * @param {string} expression
 * @return {number[]}
 */
/**
 * @param {string} expression
 * @return {number[]}
 */
let memo = new Map();
var diffWaysToCompute = function (expression) {
  // 避免重复计算
  if (memo.has(expression)) {
    return memo.get(expression);
  }
  let res = [];
  for (let i = 0; i < expression.length; i++) {
    let c = expression.charAt(i);
    // 扫描算式 expression 中的运算符
    if (c == "*" || c == "+" || c == "-") {
      /****** 分 ******/
      let left = diffWaysToCompute(expression.substring(0, i));
      let right = diffWaysToCompute(expression.substring(i + 1));
      /****** 治 ******/
      // 通过子问题的结果，合成原问题的结果
      for (let a of left) {
        for (let b of right) {
          switch (c) {
            case "*":
              res.push(a * b);
              break;
            case "+":
              res.push(a + b);
              break;
            case "-":
              res.push(a - b);
              break;
          }
        }
      }
    }
  }
  // base case，递归函数必须有个 base case 用来结束递归，其实这段代码就是我们分治算法的 base case，代表着你「分」到什么时候可以开始「治」
  // 如果 res 为空，说明算式是一个数字，没有运算符（因为当算式中不存在运算符的时候，就不会触发 if 语句，也就不会给res中添加任何元素）
  if (!res.length) {
    res.push(parseInt(expression));
  }
  // 将结果添加进备忘录
  memo.set(expression, res);
  return res;
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
    const list = new Array().fill(0);
    backtrack(list, num, num.length, 0, 0, 0);
    return list;
};

const backtrack = (list, num, length, index, sum, prev) => {
    if (index === length) {
        return list.length >= 3;
    }
    let currLong = 0;
    for (let i = index; i < length; i++) {
        if (i > index && num[index] === '0') {
            break;
        }
        currLong = currLong * 10 + num[i].charCodeAt() - '0'.charCodeAt();
        if (currLong > Math.pow(2, 31) - 1) {
            break;
        }
        let curr = currLong;
        if (list.length >= 2) {
            if (curr < sum) {
                continue;
            } else if (curr > sum) {
                break;
            }
        }
        list.push(curr);
        if (backtrack(list, num, length, i + 1, prev + curr, curr)) {
            return true;
        } else {
            list.splice(list.length - 1, 1);
        }
    }
    return false;
}
```
