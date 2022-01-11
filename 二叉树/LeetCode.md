# leetcode

## 剑指 Offer 34. 二叉树中和为某一值的路径

[剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    let path = [];
    let result = [];
    
    function DFS (node, sum) {
        if (!node) {
            return;
        }

        // 主逻辑
        if (!node.left && !node.right && (target === (sum+node.val))) {
            result.push([...path, node.val]);
        }
        path.push(node.val);
        DFS(node.left, sum + node.val);
        DFS(node.right, sum + node.val);
        path.pop();
    }
    DFS(root, 0);
    return result;
};
```

## 1372. 二叉树中的最长交错路径

[1372. 二叉树中的最长交错路径](https://leetcode-cn.com/problems/longest-zigzag-path-in-a-binary-tree/)



![image-20211107172718993](/Users/smzdm/Library/Application Support/typora-user-images/image-20211107172718993.png)

原理，每一个节点都可以用 [l, r] 来表示

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
    let result = 0;

    function DFS (node, l, r) {
        result = Math.max(result, l, r);
        if (node.left) {
            DFS(node.left, r + 1, 0);
        }
        if (node.right) {
            DFS(node.right, 0, l+1);
        }
    }
    DFS(root, 0, 0);

    return result;
};

```

## 剑指 Offer 37. 序列化二叉树

[剑指 Offer 37. 序列化二叉树](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/)

用的BFS的方法解决的这个问题，主要是使用的队列

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return JSON.stringify([]);
    
    let res = [];
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();

        if (node !== null) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push(null)
        }

    }

    return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '[]') return null;
    let arr = JSON.parse(data);

    let root = new TreeNode(arr[0]);
    let queue = [root];

    let i = 1;

    while (queue.length){
        let node = queue.shift();

        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        if (arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```


## 654. 最大二叉树 

[654. 最大二叉树 ](https://leetcode-cn.com/problems/maximum-binary-tree/)


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 使用前序遍历来 序列化这个最大二叉树
var constructMaximumBinaryTree = function(nums) {
    function DFS (arr, l, r) {
        
        if (l > r) {
            return null;
        }

        // 找到数组的中的最大值
        let newArr = arr.slice(l, r + 1);
        let maxVal = -1;
        let maxIndex = -1;
        maxVal = Math.max(...newArr);
        maxIndex = arr.indexOf(maxVal);


        let root = new TreeNode(maxVal);
        root.left = DFS(arr, l, maxIndex - 1);
        root.right = DFS(arr, maxIndex + 1, r);
        //
        return root;
    }

    const res = DFS(nums, 0, nums.length - 1);
    
    return res;
};

```


## 894. 所有可能的满二叉树

[894. 所有可能的满二叉树](https://leetcode-cn.com/problems/all-possible-full-binary-trees/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    const map = new Map();
    if (!map.has(n)) {
        const ans = [];
        if (n == 1) {
            ans.push(new TreeNode(0));
        } else if (n % 2 == 1) {
            for (let i = 1; i < n; i++) {
                let j = n - 1 - i;
                // 左子树分配i节点
                const leftNodes = allPossibleFBT(i);
                const rightNodes = allPossibleFBT(j);

                leftNodes.forEach((left) => {
                    rightNodes.forEach((right) => {
                        const node = new TreeNode(0);
                        node.left = left;
                        node.right = right;
                        ans.push(node);
                    });
                });
            }
        }
        map.set(n, ans);
    }
    return map.get(n);
};

```

## 1008. 前序遍历构造二叉搜索树

[1008. 前序遍历构造二叉搜索树](https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (!preorder.length) {
        return null;
    }
    const val = preorder.shift();
    let root = new TreeNode(val);

    // digui
    root.left = bstFromPreorder(preorder.filter(item => item < val));
    root.right = bstFromPreorder(preorder.filter(item => item > val));
    return root;
};
```

## 863. 二叉树中所有距离为 K 的结点

[863. 二叉树中所有距离为 K 的结点](https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/)


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
/* 
    从target出发，使用DFS，找到深度为k的所有的节点
    遍历的方向是有三个的，分别是左右子节点，还有自己的父节点

    其实这个题目最重要的是，还要向自己的父节点去遍历
*/
var distanceK = function(root, target, k) {
    const map = new Map();
    const res = [];

    /* map 记录所有节点的父节点 */
    function findParents(node) {
        if (node.left) {
            map.set(node.left.val, node);
            findParents(node.left);
        }
        if (node.right) {
            map.set(node.right.val, node);
            findParents(node.right);
        }
    }
    findParents(root);

    function DFS (node, from, depth, k) {
        if (!node) return;
        if (depth === k) {
            res.push(node.val);
            return;
        }
        // 向左下边递归
        if (node.left !== from) {
            DFS(node.left, node, depth + 1, k);
        }
        /* 向右下边递归 */
        if (node.right !== from) {
            DFS(node.right, node, depth + 1, k);
        }
        /* 向父元素递归 */
        if (map.get(node.val) !== from) {
            DFS(map.get(node.val), node, depth + 1, k);
        }
    }
    DFS(target, null, 0, k);
    return res;
};
```

## 98. 验证二叉搜索树

[98. 验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let pre = -Infinity;

    function inorder(node) {
        if (node == null) return true;
        let left = inorder(node.left);
        // zhu
        if (node.val <= pre) return false;
        pre = node.val;
        let right = inorder(node.right);
        return left && right;
    }
    return inorder(root);
};

```

## 99. 恢复二叉搜索树

[99. 恢复二叉搜索树](https://leetcode-cn.com/problems/recover-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let prev = new TreeNode(-Infinity);
    let err1 = null, err2 = null;
    function inorder(node) {
        if (node == null) return;
        inorder(node.left);
        // 主逻辑
        /* 第一对错误，错的点是prev */
        if (prev.val >= node.val && err1 == null) {
            err1 = prev;
        }
        /* 第二对错误，错的点是 node，也就是第二个 */
        if (prev.val >= node.val && err1 !== null) {
            err2 = node;
        }
        prev = node;
        inorder(node.right);

    }
    inorder(root);
    // swap 
    let temp = err1.val;
    err1.val = err2.val;
    err2.val = temp;

    return root;
};
```


## 94. 二叉树的中序遍历

[94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = []
    function inorder(node) {
        if (node == null) return;

        inorder(node.left);

        if (node.val) {
            res.push(node.val);
        }

        inorder(node.right);
    }
    inorder(root);
    return res;
};
```

## 173. 二叉搜索树迭代器

[173. 二叉搜索树迭代器](https://leetcode-cn.com/problems/binary-search-tree-iterator/)

算法思路： 

1. 在构造器里面的时候，使用中序遍历，都把value放在数组里，然后，调用各个原型上的方法的时候，直接去操作数组就行了
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.arr = [];
    this.index = 0;
    this.inorder(root);
};
/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[this.index++];
};
/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index < this.arr.length;
};
/* 中序遍历 */
BSTIterator.prototype.inorder = function(node) {
    if (node == null) return;
    this.inorder(node.left);
    //zhu 
    if (node.val !== null) {
        this.arr.push(node.val);
    }
    this.inorder(node.right);
};
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```

## 222. 完全二叉树的节点个数

[222. 完全二叉树的节点个数](https://leetcode-cn.com/problems/count-complete-tree-nodes/)

使用的BFS 广度优先遍历，来计算数量

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root == null) return 0;
    let arr = [root];
    let res = 1;
    while (arr.length) {
        let node = arr.shift();
        if (node.left) {
            res++;
            arr.push(node.left);
        }
        if (node.right) {
            res++;
            arr.push(node.right);
        }
    }
    return res;
};
```

## 662. 二叉树最大宽度

[662. 二叉树最大宽度](https://leetcode-cn.com/problems/maximum-width-of-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if (root == null) return 0;

    let res = 0;
    let leftmost = 0;
    let cur_deps = 0;
    let steps = 0;

    let queue = [[root, 0]];
    while (queue.length) {
        const len = queue.length;

        for(let i = 0; i < len; i++) {
            let [node, pos] = queue.shift();

            if (node || node.val == 0) {
                queue.push([node.left, pos * 2]);
                queue.push([node.right, pos * 2 + 1]);
                if (cur_deps !== steps) {
                    cur_deps = steps;
                    leftmost = pos;
                }
                res = Math.max(res, pos - leftmost + 1);
            }
        }
        steps += 1;
    }
    return res;
};
```




## 919. 完全二叉树插入器

[919. 完全二叉树插入器](https://leetcode-cn.com/problems/complete-binary-tree-inserter/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {

};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {

};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {

};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

```



## 124. 二叉树中的最大路径和

[124. 二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/description/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS 后序遍历
var maxPathSum = function(root) {
    if (root == null) return 0;
    let res = Number.MIN_SAFE_INTEGER;
    const dfs = (node, val) => {
        if (node == null) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        /* 所有的路径加起来 */
        const maxSum = left + node.val + right;
        /* 获取最大值，也是最终的返回值 */
        res = Math.max(maxSum, res);
        /* 当前子树，能够对外提供的最大的值 */
        let outputSum = node.val + Math.max(0, left, right);
        return outputSum < 0 ? 0 : outputSum;
    }
    dfs(root);
    return res;
};
```

## 113. 路径总和 II

[113. 路径总和 II](https://leetcode-cn.com/problems/path-sum-ii/)

路径的概念是：一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。这听起来真的不容易理解，力扣给的 demo 我也没搞懂，这里我自己画了几个图来给大家解释一下这个概念。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
// DFS + 回溯
var pathSum = function(root, targetSum) {
    if (root == null) return [];
    let res = [];
    let path = [];
    // DFS 
    const dfs = (node, sum, path) => {
        /* 第一步肯定是要终止条件 */
        if (node == null) return;
        /* 添加路径 */
        path.push(node.val);
        /* 开始加数， 计算路径总和 */
        sum += node.val;
        // 先条件判断，找到叶子节点
        if (node.left == null && node.right == null) {
            if (targetSum == sum) {
                res.push([...path]);
            }
        }
        if (node.left) {
            dfs(node.left, sum, path);
        }
        if (node.right) {
            dfs(node.right, sum, path);
        }
        // 回溯
        path.pop();
    };
    dfs(root, 0, path);
    return res;
};
```

## 距离

## 863. 二叉树中所有距离为 K 的结点

[863. 二叉树中所有距离为 K 的结点](https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/description/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const map = new Map();
    const res = [];

    /* map 记录所有节点的父节点， 目的就是为了能向自己的父元素去递归查找 */
    function findParents(node) {
        if (node.left) {
            map.set(node.left.val, node);
            findParents(node.left);
        }
        if (node.right) {
            map.set(node.right.val, node);
            findParents(node.right);
        }
    }
    findParents(root);

    function DFS (node, from, depth, k) {
        if (!node) return;
        if (depth === k) {
            res.push(node.val);
            return;
        }
        // 向左下边递归
        if (node.left !== from) {
            DFS(node.left, node, depth + 1, k);
        }
        /* 向右下边递归 */
        if (node.right !== from) {
            DFS(node.right, node, depth + 1, k);
        }
        /* 向父元素递归 */
        if (map.get(node.val) !== from) {
            DFS(map.get(node.val), node, depth + 1, k);
        }
    }
    DFS(target, null, 0, k);
    return res;
};
```

## 834. 树中距离之和

[834. 树中距离之和](https://leetcode-cn.com/problems/sum-of-distances-in-tree/description/)

这个暂时占个坑

```js
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let ans, sz, dp, graph;
const dfs = (u, f) => {
    sz[u] = 1;
    dp[u] = 0;
    for (const v of graph[u]) {
        if (v === f) {
            continue;
        }
        dfs(v, u);
        dp[u] += dp[v] + sz[v];
        sz[u] += sz[v];
    }
}
const dfs2 = (u, f) => {
    ans[u] = dp[u];
    for (const v of graph[u]) {
        if (v === f) {
            continue;
        }
        const pu = dp[u], pv = dp[v];
        const su = sz[u], sv = sz[v];

        dp[u] -= dp[v] + sz[v];
        sz[u] -= sz[v];
        dp[v] += dp[u] + sz[u];
        sz[v] += sz[u];

        dfs2(v, u);

        dp[u] = pu, dp[v] = pv;
        sz[u] = su, sz[v] = sv;
    }
}
var sumOfDistancesInTree = function(n, edges) {
    ans = new Array(n).fill(0);
    sz = new Array(n).fill(0);
    dp = new Array(n).fill(0);
    graph = new Array(n).fill(0).map(v => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    dfs(0, -1);
    dfs2(0, -1);
    return ans;
};
```



## 双递归

## 面试题 04.12. 求和路径


[面试题 04.12. 求和路径](https://leetcode-cn.com/problems/paths-with-sum-lcci/)


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// 双递归
/* 
    一个主递归函数，一个内部递归函数
*/
var pathSum = function(root, sum) {
    if (root == null) return 0;
    /* 这里倒着减数字 */
    const helper = (root, sum) => {
        if (root == null) return 0;
        if (sum == root.val) {
            return 1 + helper(root.left, sum - root.val) + helper(root.right, sum - root.val);
        }
        return helper(root.left, sum - root.val) + helper(root.right, sum - root.val);
    }

    return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
```

## 563. 二叉树的坡度


[563. 二叉树的坡度](https://leetcode-cn.com/problems/binary-tree-tilt/description/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 后序遍历 */
var findTilt = function(root) {
    if (root == null) return 0;
    let res = 0;

    const dfs = (root) => {
        if (root == null) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        res += Math.abs(right - left);
        return right + left + root.val;
    }
    dfs(root)
    return res;
}; 

```

## 129. 求根节点到叶节点数字之和

[129. 求根节点到叶节点数字之和](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 前序遍历 */
/* 
    定义一个数组来收集所有的值；
    使用前序遍历
    把所有的值相加
*/
var sumNumbers = function(root) {
    if (root == null) return 0;
    let path = [];
    const DFS = (root, sum) => {
        if (root == null) return;
        if (root.left == null && root.right == null) {
            sum = sum * 10 + root.val;
            path.push(sum);
        }
        sum = sum * 10 + root.val;
        DFS(root.left, sum);
        DFS(root.right, sum);
    }
    DFS(root, 0);
    return path.reduce((prev, next) => {
        return prev + next;
    }, 0);
};
```

## 1448. 统计二叉树中好节点的数目

[1448. 统计二叉树中好节点的数目](https://leetcode-cn.com/problems/count-good-nodes-in-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 后续遍历 */
var goodNodes = function(root) {
    if (root == null) return 0;
    /* 因为根节点也是好节点 */
    let res = 0; 
    const dfs = (root, max) => {
        if (root == null) return;

        if (root.val >= max) {
            res += 1;
            max = root.val;
        }
        dfs(root.left, max);
        dfs(root.right, max);
    }
    dfs(root, Number.MIN_SAFE_INTEGER);
    return res;
};
```

## 1022. 从根到叶的二进制数之和

[1022. 从根到叶的二进制数之和](https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    if (root == null) return 0;
    let res = 0;
    const dfs = (root, path) => {
        if (root == null) return;
        /* 添加值到路径里去 */
        path.push(root.val);
        
        if (root.left == null && root.right == null) {
            /* 处理叶子结点 */
            const num = path.join('');/* 生成二进制 */
            res += parseInt(num, 2); /* 二进制转换为10进制 */
        }
        dfs(root.left, path);
        dfs(root.right, path);
        /* 回溯 */
        path.pop();
    };
    dfs(root, [])
    return res;
};
```

## 814. 二叉树剪枝

[814. 二叉树剪枝](https://leetcode-cn.com/problems/binary-tree-pruning/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* 利用了虚拟节点的概念 */
var pruneTree = function(root) {
    const dfs = (root) => {
        if (root == null) return 0;
        const l = dfs(root.left);
        const r = dfs(root.right);

        if (l == 0) root.left = null;
        if (r == 0) root.right = null;
        /* 加起来，如果是0 就会被剪掉 */
        return root.val + l + r;
    }
    let ans = new TreeNode(-1);
    ans.left = root;

    dfs(ans);
    return ans.left;
};
```
## 1325. 删除给定值的叶子节点

[1325. 删除给定值的叶子节点](https://leetcode-cn.com/problems/delete-leaves-with-a-given-value/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    const dfs = (root) => {
        if (root == null) return null;

        root.left = dfs(root.left);
        root.right = dfs(root.right);
        /* 找到叶子节点，并且值为target */
        if (root.val == target && root.left == null && root.right == null) {
            /* 剪掉 */
            return null;
        }
        return root;
    }
    return dfs(root);

};
```
## 边界

## 783. 二叉搜索树节点最小距离

[783. 二叉搜索树节点最小距离](https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    const dfs = (root, lower, upper) => {
        if (root == null) return upper - lower;
        const left = dfs(root.left, lower, root.val);
        const right = dfs(root.right, root.val, upper);
        return Math.min(left, right);
    }
    return dfs(root, -Infinity, Infinity);
};
```

## 1026. 节点与其祖先之间的最大差值

[1026. 节点与其祖先之间的最大差值](https://leetcode-cn.com/problems/maximum-difference-between-node-and-ancestor/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 目的是找到最大的差值 */
var maxAncestorDiff = function(root) {
    const dfs = (root, lower, upper) => {
        if (root == null) return upper - lower;
        /* 计算两边的差值 */
        const left = dfs(root.left, Math.min(lower, root.val), Math.max(root.val, upper));
        const right = dfs(root.right, Math.min(lower, root.val), Math.max(root.val, upper));
        /* 返回最大的一个差值 */
        return Math.max(left, right);
    }
    return dfs(root, root.val, root.val);
};
```

下面两个题目，是一样的
## 865. 具有所有最深节点的最小子树

[865. 具有所有最深节点的最小子树](https://leetcode-cn.com/problems/smallest-subtree-with-all-the-deepest-nodes/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    if (root == null) return null; 
    const getDepth = (root) => {
        if(root == null) return 0;
        return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
    }
    const left = getDepth(root.left);
    const right = getDepth(root.right);

    if (left == right) {
        /* 当左右子树深度相同的时候，就是我们要找的最深的子树 */
        return root;
    } else if (left > right) {
        return subtreeWithAllDeepest(root.left);
    } else if (left < right) {
        return subtreeWithAllDeepest(root.right);
    }
};
```

## 1123. 最深叶节点的最近公共祖先

[1123. 最深叶节点的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    if (root == null) return null;
    const getDepth = (root) => {
        if (root == null) return 0;
        return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
    }
    const left = getDepth(root.left);
    const right = getDepth(root.right);

    if (left == right) {
        /* 如果深度相同，那么就是我们要找的那个子树 */
        return root;
    } else if (left > right) {
        /* 左边深度高，那么就往左侧找 */
        return lcaDeepestLeaves(root.left);
    } else if (left < right) {
        /* 右边深度高，那么就往右侧找 */
        return lcaDeepestLeaves(root.right);
    }
};
```

## 1530. 好叶子节点对的数量

[1530. 好叶子节点对的数量](https://leetcode-cn.com/problems/number-of-good-leaf-nodes-pairs/description/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
/* 后序遍历 */
var countPairs = function(root, distance) {
    if (root == null) return 0;
    let res = 0;
    const dfs = (root) => {
        if (root == null) return [];
        /* 叶子节点 */
        if (root.left == null && root.right == null) return [0];
        const left = dfs(root.left).map(i => i + 1);
        const right = dfs(root.right).map(i => i + 1);
        /* 计算最短路径 */
        for (const l of left) {
            for (const r of right) {
                if (l + r <= distance) res++;
            }
        }

        return [...left, ...right];
    }
    dfs(root);
    return res;
};
```

## 剑指 Offer 55 - I. 二叉树的深度

[剑指 Offer 55 - I. 二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 后序遍历 */
var maxDepth = function(root) {
    if (root == null) return 0;
    const dfs = (root) => {
        if (root == null) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        return Math.max(left, right) + 1;
    };
    return dfs(root);
};
```

## 101. 对称二叉树

[101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const check = (leftNode, rightNode) => {
        if (leftNode == null && rightNode == null) return true;
        if (leftNode == null || rightNode == null) return false;
        return leftNode.val == rightNode.val && check(leftNode.left, rightNode.right) && check(leftNode.right, rightNode.left);
    };
    return check(root, root);
};
```
## 226. 翻转二叉树

简单： [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* 很经典的二叉树问题 */
var invertTree = function(root) {
    if (root == null) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;
    return root;
};
```

## 543. 二叉树的直径

[543. 二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (root == null) return null;
    let res = 0;
    const dfs = (root) => {
        if (root == null) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        /* 取最大值 */
        res = Math.max(res, left+right);

        return Math.max(left, right) + 1;
    }
    dfs(root);
    return res;
};
```

## 971. 翻转二叉树以匹配先序遍历

[971. 翻转二叉树以匹配先序遍历0](https://leetcode-cn.com/problems/flip-binary-tree-to-match-preorder-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    if (root == null) return [-1];
    if (root.val !== voyage[0]) return [-1];
    let res = [];
    let i = 0;
    const dfs = (root) => {
        if (root == null) return;
        i++;
        /* 如果左树匹配 */
        if (root.left && root.left.val == voyage[i]) {
            dfs(root.left);
        }
        if (root.right && root.right.val == voyage[i]) {
            dfs(root.right);
            /* 右树完成之后，需要看看现在 pos 所在的值是否可以匹配左树，即是否先走右树再走左树，成立即当前的 root 节点就是需要进行翻转的节点 */
            if (root.left && root.left.val == voyage[i]) {
                res.push(root.val);
                dfs(root.left);
            }
        }
    }
    dfs(root);
    if (i < voyage.length) return [-1];
    return res;
}; 
```

## 面试题 04.06. 后继者

[面试题 04.06. 后继者](https://leetcode-cn.com/problems/successor-lcci/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
/* 中序遍历 */
var inorderSuccessor = function(root, p) {
    if(root == null) {
        return null;
    }
    const arr = [];
    let res = 0;
    const dfs = (root) => { 
        if(root == null) return;
        dfs(root.left);
        arr.push(root);
        if(root == p) {
            res = arr.length;
        }
        dfs(root.right);
    }
    dfs(root);
    return arr[res];
};
```
## 144. 二叉树的前序遍历

[144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root == null) return [];
    const res = [];
    const dfs = (root) => {
        if (root == null) return;
        res.push(root.val);
        root.left && dfs(root.left);
        root.right && dfs(root.right);
    }
    dfs(root);
    return res;
};
```

## 230. 二叉搜索树中第K小的元素

[230. 二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
/* 中序遍历 */
var kthSmallest = function(root, k) {
    if (root == null) return null;
    const res = [];
    const dfs = (root) => {
        if (root == null) return;
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return res[k - 1];
};
```

## 145. 二叉树的后序遍历

[145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root == null) return [];
    const res = [];
    const dfs = (root) => {
        if (root == null) return;
        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
    }
    dfs(root);
    return res;
};
```

## 102. 二叉树的层序遍历

[102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        /* 记录当前层的节点数 */
        let length = queue.length;
        /* 存放每一层的节点 */
        let currentArr = [];
        for (let index = 0; index < length; index++) {
            /* 这里注意要用shift， 因为下面是push, 所以要取头部的 */
            const node = queue.shift();
            currentArr.push(node.val);
            /* 存放下一层的节点 */
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(currentArr);
    }
    return res;
};
```

## 236. 二叉树的最近公共祖先

[236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null) return null;
    const dfs = (root) => {
        /* 确定递归终止条件 */
        if (root == null) {return null;}
        /* 这是其中一种情况， 如果root 等于其中某一个，那么，root就是要找到的最近的公共祖先 */
        if(root == p || root == q) {
            return root;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);

        if(left && right) {
            /* 当这两个同时不为空，那么p,q 肯定就是在root的两侧，那么root就是我们要找的节点 */
            return root;
        }
        if (left == null) {
            return right;
        }
        return left;
    }
    return dfs(root);
}; 
```

## 103. 二叉树的锯齿形层序遍历

[103. 二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root == null) return [];

    const queue = [root];
    let res = [];
    /* 设置一个开关 */
    let b = true;
    while (queue.length) {
        let length = queue.length;
        let curArr = [];
        for (let index = 0; index < length; index++) {
            const node = queue.shift();
            curArr.push(node.val);
            /* 新的一层 */
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        /* 进行反转 */
        if(!b) {
            curArr = curArr.reverse();
        }
        b = !b;
        res.push(curArr);
    }
    return res;
};
```

## 107. 二叉树的层序遍历 II

[107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root == null) return [];

    const queue = [root];
    const res = [];
    while(queue.length) {
        const curArr = [];
        const length = queue.length;

        for (let index = 0; index < length; index++) {
            const node = queue.shift();
            curArr.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(curArr);
    }
    return res.reverse();
};
```

## 701. 二叉搜索树中的插入操作

[701. 二叉搜索树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root == null) {
        return new TreeNode(val);
    }
    if (root.val >= val) {
        /* 如果当前的节点大于等于要插入的节点，那么就插入左子树 */
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
};
```

## 108. 将有序数组转换为二叉搜索树

[108. 将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    const dfs = (nums, left, right) => {
        // 条件限制
        if (left > right) return null;
        // 找到中点
        const mid = Math.floor(left + (right - left) / 2);
        const root = new TreeNode(nums[mid]);
        // 左子树
        root.left = dfs(nums, left, mid - 1);
        // 右子树
        root.right = dfs(nums, mid + 1, right);
        return root;
    }
    return dfs(nums, 0, nums.length - 1);
};
```

## 1382. 将二叉搜索树变平衡

[1382. 将二叉搜索树变平衡](https://leetcode-cn.com/problems/balance-a-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* 
    上一个题目，是一个有序数组转化为平衡二叉树
    思路： 
    1， 先把BST 中序遍历，生成一个有序数组
    2， 再把这个有序数组转化为平衡BST二叉树
*/
var balanceBST = function(root) {
    if (root == null) return null;
    const arr = [];
    const inorder = (root) => {
        if (root == null) return;
        inorder(root.left);
        arr.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    const buildDfs = (arr, left, right) => {
        if (left > right) return null;

        // zhong
        const mid = Math.floor(left + (right - left) / 2);
        const root = new TreeNode(arr[mid]);
        root.left = buildDfs(arr, left, mid - 1);
        root.right = buildDfs(arr, mid + 1, right);
        return root;
    }
    return buildDfs(arr, 0, arr.length - 1);
};
```

## 100. 相同的树

[100. 相同的树](https://leetcode-cn.com/problems/same-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p == null && q == null) {
        return true;
    } else if (p == null || q == null) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};
```

## 111. 二叉树的最小深度

[111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 这个使用BFS 更好理解 */
var minDepth = function(root) {
    if (root == null) return 0;

    const queue = [root];
    let depth = 1;
    while(queue.length) {
        const length = queue.length;
        for (let index = 0; index < length; index++) {
            const node = queue.shift();

            if (node.left == null && node.right == null) {
                return depth;
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }
            
        }
        depth += 1;
    }
    return depth;
};
```

## 112. 路径总和

[112. 路径总和](https://leetcode-cn.com/problems/path-sum/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root == null) {
        return false;
    }
    if (root.left == null && root.right == null) {
        return root.val === targetSum;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
```

## 235. 二叉搜索树的最近公共祖先

[235. 二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return null;
    const dfs = (root) => {
        if (root == null) {
            return null;
        }
        /* 这是其中一种情况， 如果root 等于其中某一个，那么，root就是要找到的最近的公共祖先 */
        if (root.val == p.val || root.val == q.val) {
            return root;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);

        if (left && right) {
            return root;
        }
        if (left == null) {
            return right;
        }
        return left;
    }
    return dfs(root);
};
```
## 257. 二叉树的所有路径

[257. 二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root == null) return [];
    const res = [];
    const dfs = (root, arr) => {
        if (root == null) return;
        arr.push(root.val);
        if (root.left == null && root.right == null) {
            const str = arr.join('->');
            res.push(str);
        }
        dfs(root.left, arr);
        dfs(root.right, arr);
        /* 回溯 */
        arr.pop();
    }
    dfs(root, []);
    return res;
};
```

## 404. 左叶子之和

简单

[404. 左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (root == null) return 0;
    let num = 0;
    const dfs = (root) => {
        if (root == null) return;
        if (root.left !== null && root.left.left == null && root.left.right == null) {
            num = num + root.left.val;
        }
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return num;
};
```

## 501. 二叉搜索树中的众数

[501. 二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if (root == null) return [];
    let res = [];
    let pre; /* 当前数字 */
    let preNum; /* 当前数字的数量 */
    let max = 0;
    const dfs = (root) => {
        if(root == null) return;

        if (root.left) dfs(root.left);
        /* 处理判断条件 */
        if (root.val == pre) {
            preNum++;
        } else {
            pre = root.val;
            preNum = 1;
        }
        if (preNum > max) {
            max = preNum;
            /* 替换为新的众数 */
            res = [root.val];
        } else if (preNum == max) {
            res.push(root.val);
        }
        if (root.right) dfs(root.right);
    }
    dfs(root);
    return res;
};
```

## 530. 二叉搜索树的最小绝对差

[530. 二叉搜索树的最小绝对差](https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min = Number.MAX_SAFE_INTEGER;
    let pre = -1;
    const dfs = (root) => {
        if (root == null) return;
        if(root.left) dfs(root.left);
        /* 逻辑 */
        if (pre == -1) {
            pre = root.val;
        } else {
            min = Math.min(root.val - pre, min);
            pre = root.val;
        }
        
        if(root.right) dfs(root.right);
    }
    dfs(root);
    return min;
};
```

## 572. 另一棵树的子树

[572. 另一棵树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

    let bool = true
    let res = false
    let subnode = subRoot
    function tra(n1, n2) {
        if (n1 && n2) {
            if (n1.val === n2.val) {
                tra(n1.left, n2.left)
                tra(n1.right, n2.right)
            } else {
                bool = false
            }
        } else {
            if ((!n2 && !n1)) {
                return ;
            } else {
                bool = false
            }
        }
    }
    function traverse(node) {
        // 如果已经找到相同子树了（res === true）就直接返回不再递归了
        // 防止重复的叶子，导致res置false
        if (!node || res) {
            return ;
        }
        if (node.val === subnode.val) {
            // 每次准备dfs子树时，先将标志置true
            // 因为树中可能有重复val的叶子 
            bool = true
            tra(node, subnode)
            res = bool
        }
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return res
};

```

## 606. 根据二叉树创建字符串

简单

[606. 根据二叉树创建字符串](https://leetcode-cn.com/problems/construct-string-from-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {
    if (root == null) return '';
    
    const dfs = (root) => {
        if(root == null) return '';
        /* 找到叶子节点 */
        if (root.left == null && root.right == null) {
            return `${root.val}`;
        }
        let left, right;
        if(root.left && !root.right) {
            left = `(${dfs(root.left)})`;
            right = '';
        } else {
            left = root.left ? `(${dfs(root.left)})` : '()';
            right = `(${dfs(root.right)})`;
        }
        
        return `${root.val}${left}${right}`;
    }
    
    return dfs(root);
};
```



## 617. 合并二叉树

[617. 合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (root1 == null && root2 == null) return null;
    if (root1 == null && root2 !== null) return root2;
    if (root1 !== null && root2 == null) return root1;

    const dfs = (root1, root2) => {
        if (root1 == null && root2 == null) return null;
        if (root1 == null && root2 !== null) return root2;
        if (root1 !== null && root2 == null) return root1;

        const root = new TreeNode(root1.val + root2.val);
        root.left = dfs(root1.left, root2.left);
        root.right = dfs(root1.right, root2.right);
        return root;
    }
    return dfs(root1, root2);
};
```
## 637. 二叉树的层平均值

[637. 二叉树的层平均值](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* BFS 广度优先遍历 */
var averageOfLevels = function(root) {
    if (root == null) return [];
    const queue = [root];
    const res = [];

    while (queue.length) {
        let curArr = [];
        const length = queue.length;

        for (let index = 0; index < length; index++) {
            const node = queue.shift();
            curArr.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            
        }
        /* 取总数 */
        let sum = curArr.reduce((prev, current) => current + prev);
        /* 计算平均值 */
        res.push(sum / curArr.length);
    }
    return res;
};
```

## 剑指 Offer 27. 二叉树的镜像

简单

[剑指 Offer 27. 二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (root == null) return null;
    const dfs = (root) => {
        if (root == null) return null;
        const node = new TreeNode(root.val);
        node.left = dfs(root.right);
        node.right = dfs(root.left);
        return node;
    }
    return dfs(root);
};
```

## 剑指 Offer 28. 对称的二叉树

简单

[剑指 Offer 28. 对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root == null) return true;
    const help = (left, right) => {
        if(left == null && right == null) return true;
        if (left == null || right == null || left.val !== right.val) {
            return false;
        }
        return help(left.left, right.right) && help(left.right, right.left);
    }
    return help(root.left, root.right);
};
```

## 剑指 Offer 32 - II. 从上到下打印二叉树 II

简单

[剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/* 
    BFS
*/
var levelOrder = function(root) {
    if (root == null) return [];
    const queue = [root];
    const res = [];
    while (queue.length) {
        const length = queue.length;
        let arr = [];

        for (let index = 0; index < length; index++) {
            const node = queue.shift();
            arr.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            
        }
        res.push(arr);
    }
    return res;
};
```

## 剑指 Offer 54. 二叉搜索树的第k大节点

简单

[剑指 Offer 54. 二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    if (root == null) return 0;
    let arr = [];
    const dfs = (root) => {
        if (root == null) return;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    arr.reverse();
    return arr[k - 1];
};
```

## 剑指 Offer 55 - II. 平衡二叉树

简单

[剑指 Offer 55 - II. 平衡二叉树](https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 左右子树的深度不超过1，就是平衡二叉树
var isBalanced = function(root) {
    if (root==null) return true;

    const getHeight = (node) => {
        if (node== null) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }
    return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
```

## 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先

简单

[剑指 Offer 68 - I. 二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/* 
    经典题目
*/
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return null;

    const dfs = (root) => {
        if (root == null) return null;

        if (root.val == p.val || root.val == q.val) {
            return root;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        if (left && right) {
            return root;
        }
        if (left == null) {
            return right;
        }
        return left;
    }
    return dfs(root);
};
/* 这个方式真不错 */
var lowestCommonAncestor = function(root, p, q){
  if(p.val < root.val && q.val < root.val){
    return lowestCommonAncestor(root.left, p, q);
  }else if(p.val > root.val && q.val > root.val){
    return lowestCommonAncestor(root.right, p, q);
  }else return root;
}
```

## 剑指 Offer 68 - II. 二叉树的最近公共祖先

简单

[剑指 Offer 68 - II. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return null;
    const dfs = (root) => {
        if (root == null) return null;
        if (root.val == p.val || root.val == q.val) {
            return root;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);

        if (left && right) {
            return root;
        }
        if (left == null) {
            return right;
        }
        return left;
    }
    return dfs(root);
};
```

## 剑指 Offer II 052. 展平二叉搜索树

简单

[剑指 Offer II 052. 展平二叉搜索树](https://leetcode-cn.com/problems/NYBBNL/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* 
    先转成数组
    在一个个变成新的搜索树
*/
var increasingBST = function(root) {
    if (root == null) return null;
    let prev = new TreeNode(-1);
    let res = [];
    const dfs = (root) => {
        if (root == null) return;
        dfs(root.left, prev.right);
        res.push(root.val);
        dfs(root.right, prev.right);
    }
    dfs(root);
    /* 指针 */
    let cur = prev;
    for (const iterator of res) {
        cur.right = new TreeNode(iterator);
        cur = cur.right;
    }

    return prev.right;
};
```

## 剑指 Offer II 056. 二叉搜索树中两个节点之和

[剑指 Offer II 056. 二叉搜索树中两个节点之和](https://leetcode-cn.com/problems/opLdQZ/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
/* 
    中序遍历 + 双指针
*/
var findTarget = function(root, k) {
    let arr = [];
    const inorder = (root) => {
        if (root == null) return;
        inorder(root.left);
        arr.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] > k) {
            right--;
        } else if (arr[left] + arr[right] < k) {
            left++;
        } else {
            return true;
        }
    }
    return false;
};
```

## 面试题 04.02. 最小高度树

[面试题 04.02. 最小高度树](https://leetcode-cn.com/problems/minimum-height-tree-lcci/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    let i = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[i]);
    root.left = sortedArrayToBST(nums.slice(0, i));
    root.right = sortedArrayToBST(nums.slice(i + 1));
    return root;
};
```

## 面试题 04.04. 检查平衡性

简单

[面试题 04.04. 检查平衡性](https://leetcode-cn.com/problems/check-balance-lcci/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null) return true;
    const help = (root) => {
        if(root == null) return 0;
        let left = help(root.left);
        let right = help(root.right);
        return Math.max(left, right) + 1;
    }
    return Math.abs(help(root.left) - help(root.right)) <=1 &&  isBalanced(root.left) && isBalanced(root.right)
};
```

## 面试题 17.12. BiNode

[面试题 17.12. BiNode](https://leetcode-cn.com/problems/binode-lcci/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* 
    这个题目有两个解决方案
    1， 用中序遍历，获取值的数组，然后再创建一个新的树
    2， 在原来的树上进行操作，使用指针的形式
*/
var convertBiNode = function(root) {
    if (root == null) return null;
    let prev= new TreeNode(-1);
    let res = prev;
    const inorder = (root) => {
        if (root == null) return null;
        inorder(root.left);

        root.left = null;
        prev.right = root;
        /* 指针指向下一位 */
        prev = root;

        inorder(root.right);
    }
    inorder(root);
    return res.right;
};
```


# tag 掘金

## 653. 两数之和 IV - 输入 BST

[653. 两数之和 IV - 输入 BST](https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
/* 
    方法1： 中序遍历，+ 双指针法
    方法2： 使用Set + 递归
*/
var findTarget = function(root, k) {
    const list = [];
    function BST(root) {
        if (root === null) return;
        BST(root.left);
        list.push(root.val);
        BST(root.right);
    }
    BST(root);
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        const sum = list[left] + list[right];
        if (sum === k) return true
        else if (sum > k) {
            right -= 1;
        } else if (sum < k) {
            left += 1;
        }
    }
    return false;
};
```

## 671. 二叉树中第二小的节点

[671. 二叉树中第二小的节点](https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let res = -1;
    let rootValue = root.val;
    function dfs(root) {
        if (root === null) return;
        /* 如果res 有值了  */
        if (res !== -1 && root.val >= res) {
            return;
        }
        if (root.val > rootValue) {
            res = root.val;
        }
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
};
```

## 700. 二叉搜索树中的搜索

[700. 二叉搜索树中的搜索](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
/* 
    这个题目单纯的递归就可以了
*/
var searchBST = function(root, val) {
    if (root == null) return null;
    if (val === root.val) {
        return root;
    }
    return searchBST(root.val > val ? root.left : root.right, val);
};
```

## 703. 数据流中的第 K 大元素

[703. 数据流中的第 K 大元素](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)

```js
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinHeap();
    for (const x of nums) {
        this.add(x);
    }
};

KthLargest.prototype.add = function(val) {
    this.heap.offer(val);
    if (this.heap.size() > this.k) {
        this.heap.poll();
    }
    return this.heap.peek();
};

class MinHeap {
    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
        this.bubbleUp(i);
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

  swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    size() {
        return this.data.length;
    }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```

## 872. 叶子相似的树

[872. 叶子相似的树](https://leetcode-cn.com/problems/leaf-similar-trees/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

/* 
    DFS 深度优先遍历，把叶子节点放在数组里
    然后，对比数组就可以了
*/
var leafSimilar = function(root1, root2) {
    function dfs(root, arr) {
        if (!root.left && !root.right) {
            arr.push(root.val);
            return;
        }
        root.left && dfs(root.left, arr);
        root.right && dfs(root.right, arr);
    }
    const arr1 = [];
    if (root1) {
        dfs(root1, arr1);
    }
    const arr2 = [];
    if (root2) {
        dfs(root2, arr2);
    }
    return arr1.toString() === arr2.toString();
};
```

## 897. 递增顺序搜索树

[897. 递增顺序搜索树](https://leetcode-cn.com/problems/increasing-order-search-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* 
    先中序遍历，放到数组里
    再创建新的二叉树
*/
var increasingBST = function(root) {
    const res = [];
    function inorder(node, arr) {
        if (!node) return;
        inorder(node.left, arr);
        arr.push(node.val);
        inorder(node.right, arr);
    }
    inorder(root, res);

    let resNode = new TreeNode(-1);
    let cur = resNode;
    for(let val of res) {
        cur.right = new TreeNode(val);
        cur = cur.right;
    }
    return resNode.right;
};
```

## 938. 二叉搜索树的范围和

[938. 二叉搜索树的范围和](https://leetcode-cn.com/problems/range-sum-of-bst/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {

};
```

## 965. 单值二叉树

[965. 单值二叉树](https://leetcode-cn.com/problems/univalued-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {

};
```

## 993. 二叉树的堂兄弟节点

[993. 二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {

};
```

## LCP 44. 开幕式焰火

[LCP 44. 开幕式焰火](https://leetcode-cn.com/problems/sZ59z6/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function(root) {

};
```

## 剑指 Offer II 059. 数据流的第 K 大数值

[剑指 Offer II 059. 数据流的第 K 大数值](https://leetcode-cn.com/problems/jBjn9C/)

```js
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```