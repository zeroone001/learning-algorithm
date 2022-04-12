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

[701. 二叉搜索树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree)

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
        if (left > right) return null;

        let mid = Math.floor(left + (right - left) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = dfs(nums, left, mid-1);
        root.right = dfs(nums, mid+1, right);
        return root;
    }
    return dfs(nums, 0, nums.length -1);
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
    /* 代表前一个值 */
    let prev = 0;
    /* 代表重复数字的数量 */
    let prevNum = 0;
    /* 代表最大的那个数量 */
    let max = 0;
    const dfs = (node) => {
        if (node == null) return;

        node.left && dfs(node.left);

        if (node.val == prev) {
            prevNum++;
        } else {
            prev = node.val;
            prevNum = 1;
        }
        if (prevNum > max) {
            max = prevNum;
            res = [node.val];
        } else if (prevNum == max) {
            res.push(node.val);
        }

        node.right && dfs(node.right);
    }
    dfs(root);
    return res;
};
```

## 450. 删除二叉搜索树中的节点

[450. 删除二叉搜索树中的节点](https://leetcode-cn.com/problems/delete-node-in-a-bst/)

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root == null) return root;
    if (root.val == key) {
        if (!root.left) {
            // 其无左子：其右子顶替其位置，删除了该节点；
            return root.right;
        } else if (!root.right) {
            // 其无右子：其左子顶替其位置，删除了该节点；
            return root.left;
        } else {
            /* 其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点。 */
            let cur = root.right;
            while (cur.left) {
                cur = cur.left;
            }
            cur.left = root.left;
            root = root.right;
            return root;
        }
    }
    // 如果目标节点小于当前节点值，则去左子树中删除；
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    }
    // 如果目标节点大于当前节点值，则去右子树中删除；
    if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    return root;
};
```
