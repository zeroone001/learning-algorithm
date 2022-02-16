## 110. 平衡二叉树

[110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

O(logn)。

二叉树中任意一个节点的左右子树的高度相差不能大于 1

平衡二叉树的定义：

1. 左右两个子树的高度差，绝对值不能超过1；
2. 左右子树都是一个平衡二叉树

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
// 获取子节点的高度
var getHeight = function (node) {
    if (node == null) return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};

var isBalanced = function(root) {
    if (root == null) return true;

    return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

```