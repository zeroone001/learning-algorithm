## 94. 二叉树的中序遍历

[94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

```js
const solution = (root) => {
    let res = [];
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return res;
}
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
    let count = [];

    const dfs = (node) => {
        if (!node) return;
        count.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return count;
};
```

## 145. 二叉树的后序遍历

[145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/)

```js
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

## 429. N 叉树的层序遍历

[429. N 叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
     let res = [];
  if (root == null) return res;
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    let level = [];
    while (size--) {
      let cur = queue.shift();
      level.push(cur.val);
      for (let node of cur.children) {
        if (node) queue.push(node);
      }
    }
    res.push(level);
  }
  return res;
};
```

## 589. N 叉树的前序遍历

[589. N 叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    let res = [];
    const dfs = (node) => {
        if (!node) return;
        res.push(node.val);
        for (let child of node.children) {
            dfs(child);
        }

    }
    dfs(root);
    return res;
};
```

## 590. N 叉树的后序遍历

[590. N 叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];
    let res = [];
    const dfs = (node) => {
        if(!node) return;
        for (let child of node.children) {
            dfs(child);
        }
        res.push(node.val);
    }
    dfs(root);
    return res;
};
```

## 987. 二叉树的垂序遍历

[987. 二叉树的垂序遍历](https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/)

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
var verticalTraversal = function(root) {
    const nodes = [];
    dfs(root, 0, 0, nodes);
    nodes.sort((tuple1, tuple2) => {
        if (tuple1[0] !== tuple2[0]) {
            return tuple1[0] - tuple2[0];
        } else if (tuple1[1] !== tuple2[1]) {
            return tuple1[1] - tuple2[1];
        } else {
            return tuple1[2] - tuple2[2];
        }
    });

    const ans = [];
    let lastcol = -Number.MAX_VALUE;
    for (const tuple of nodes) {
        let col = tuple[0], row = tuple[1], value = tuple[2];
        if (col !== lastcol) {
            lastcol = col;
            ans.push([]);
        }
        ans[ans.length - 1].push(value);
    }
    return ans;
}

const dfs = (node, row, col, nodes) => {
    if (node === null) {
        return;
    }
    nodes.push([col, row, node.val]);
    dfs(node.left, row + 1, col - 1, nodes);
    dfs(node.right, row + 1, col + 1, nodes);
}
```

## 1302. 层数最深叶子节点的和

[1302. 层数最深叶子节点的和](https://leetcode-cn.com/problems/deepest-leaves-sum/)

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  if (root == null) return 0;
  let queue = [root];
  let sum = 0;
  while (queue.length) {
    sum = 0;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let cur = queue.shift();
      sum += cur.val;
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  // 现在就是最后一层的节点值和
  return sum;
};
```