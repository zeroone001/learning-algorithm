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

// tag 掘金

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

# 完全二叉树 

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

# 路径

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
