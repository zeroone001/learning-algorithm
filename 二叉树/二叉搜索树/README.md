# BST 二叉搜索树

## BST 特性

* 左子树上的所有的节点都小于等于它的根节点的值
* 右子树上的所有的节点都大于等于它的根节点的值
* 左右子树也分别是二叉排序树
* 二叉搜索树的中序遍历的结果是一个有序的数组
* 【中序遍历是有序的】 这个知识点很关键，用于处理一些BST的算法题目

## BST 优势

* 查找，二分查找的思想，查找所需要的最大的次数等于树的高度
* 插入节点，同样的思想，一层一层比较大小，插入合适的位置

## BST缺陷

* 多次插入比根节点小的值，很容易形成线性的结构，容易导致不平衡

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




```js
/*
    先序遍历
    中序遍历
    后序遍历
*/

function generatorBST() {
    this.root = null;
    function Node(key) {
        this.left = null;
        this.right = null;
        this.key = key;
    }
    generatorBST.prototype.insert = function (key) {
        let newNode = new Node(key);
        // 假如没有节点
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertInner(this.root, newNode);
        }
    };
    generatorBST.prototype.insertInner = function (node, newNode) {
        if (node.key > newNode.key) {
            // 新的节点插到左侧
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertInner(node.left, newNode);
            }
        } else {
            // 新的节点插到右侧
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertInner(node.right, newNode);
            }
        }
    };
    // 先序遍历， 递归
    generatorBST.prototype.preOrderTraversel = function (handle) {
        this.preOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.preOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            handle(node.key);
            this.preOrderTraverselNode(node.left, handle);
            this.preOrderTraverselNode(node.right, handle);
        }
    };

    // 中序遍历
    generatorBST.prototype.midOrderTraversel = function (handle) {
        this.midOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.midOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            this.preOrderTraverselNode(node.left, handle);

            handle(node.key); // 关键

            this.preOrderTraverselNode(node.right, handle);
        }
    };

    // 后序遍历 递归
    generatorBST.prototype.lastOrderTraversel = function (handle) {
        this.lastOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.lastOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            this.lastOrderTraverselNode(node.left, handle);

            this.lastOrderTraverselNode(node.right, handle);

            handle(node.key); // 关键
        }
    };
    // 搜索节点

     
    // 删除节点
    generatorBST.prototype.remove = function (key) {
        let current = this.root;
        let parent = null;
        let isleftChild = true;
        // 寻找节点
        while (current.key !== key) {
            parent = current;

            if (key < current.key) {
                current = current.left;
                isleftChild = true;
            } else if (key > current.key) {
                current = current.right;
                isleftChild = false;
            }
            // 找到最后的节点都没有找到
            if (current === null) {
                return false;
            }
        }

        // 删除的节点是叶子节点
        if (current.left === null && current.right === null) {
            // 这就是一个叶子节点
            if (current === this.root) {
                this.root = null;
            } else if (isleftChild){
                parent.left = null;
            } else if (!isleftChild) {
                parent.right = null;
            }
        }

        // 有一个子节点
        else if (current.right === null) {
            if (current === this.root) {
                this.root = current.left;
            }
            if (isleftChild) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        } else if (current.left === null) {
            if (current === this.root) {
                this.root = current.right;
            }
            if (isleftChild) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        }
        // 
    };
}
```