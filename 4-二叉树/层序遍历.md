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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let queue = [root];
    let res = [];
    
    while(queue.length) {
        let len = queue.length;
        let curArr = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            curArr.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
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
    if(!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let len = queue.length;

        let curArr = [];

        for (let i = 0; i < len; i++) {
            const node = queue.shift();

            curArr.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.unshift(curArr);
    }
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
    if (!root) return [];
    let queue = [root];
    let res = [];

    while (queue.length) {
        let len = queue.length;

        let curArr = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();

            curArr.push(node.val);

            for (let val of node.children) {
                val && queue.push(val);
            }
        }
        res.push(curArr);
    }
    return res;

};
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
var leafSimilar = function(root1, root2) {
    const dfs = (node, arr) => {
        if (!node.left && !node.right) {
            arr.push(node.val);
            return;
        }
        node.left && dfs(node.left, arr);
        node.right && dfs(node.right, arr);
    }
    let arr1 = [];
    dfs(root1, arr1);

    let arr2 = [];
    dfs(root2, arr2);

    return arr1.toString() === arr2.toString();
};
```