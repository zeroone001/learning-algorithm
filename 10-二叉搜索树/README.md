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
    const inorder = (node) => {
        if (!node) return true;
        let left = inorder(node.left);

        if (node.val <= pre) return false;
        let right = inorder(node.right);
        return left && right;
    }
    return inorder(root);
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
    let min = Infinity;
    let pre = -1;

    const dfs = (node) => {
        if (!node) return;
        if (node.left) dfs(node.left);
        if (pre == -1) {
            pre = node.val;
        } else {
            min = Math.min(node.val-pre, min);
            pre = node.val;
        }

        if (node.right) dfs(node.right);

    }
    dfs(root);
    return min;
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
var searchBST = function(root, val) {
    if (root == null) return null;
    if (root.val === val) return root;

    return searchBST(root.val > val ? root.left : root.right, val);
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
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
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
var kthSmallest = function(root, k) {
    if (root == null) return null;
    let res = [];
    const dfs = (node) => {
        if (node == null) return;
        node.left && dfs(node.left);
        res.push(node.val);
        node.right && dfs(node.right);
    }
    dfs(root);
    return res[k-1];
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
    let err1 = null;
    let err2 = null;

    const inorder = (node) => {
        if (node == null) return;

        inorder(node.left);
        /*  */
        if (prev.val >= node.val && err1 == null) {
            err1 = prev;
        }
        if (prev.val >= node.val && err1 != null) {
            err2 = node;
        }

        prev = node;

        inorder(node.right);
    }
    inorder(root);
    let tmp = err1.val;
    err1.val = err2.val;
    err2.val = tmp;

};
```

## 108. 将有序数组转换为二叉搜索树

[](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

## 501. 二叉搜索树中的众数

[501. 二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)

## 450. 删除二叉搜索树中的节点

[450. 删除二叉搜索树中的节点](https://leetcode-cn.com/problems/delete-node-in-a-bst/)
