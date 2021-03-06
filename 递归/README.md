# 递归

> 递归是一种非常高效、简洁的编码技巧，一种应用非常广泛的算法，比如DFS深度优先搜索、前中后序二叉树遍历等都是使用递归

## 编写递归代码的姿势

1. 推导递归公式
2. 找出终止条件
3. 编写递归代码


## 弊端

1. 堆栈溢出
2. 重复计算
3. 函数调用耗时多
4. 空间复杂度高

## 一个问题只要同时满足以下3个条件，就可以用递归来解决

1. 问题的解可以分解为几个子问题的解。何为子问题？就是数据规模更小的问题。
2. 问题与子问题，除了数据规模不同，求解思路完全一样
3. 存在递归终止条件

## 递归结构分为4部分

```js
f(n){
//终止条件
if(flag){
return finalResult;
}
//递
temp = f(n-1);
//实际处理
result = handle(temp);
//归
return result;
}
```

## LeetCode题目

通过经典算法题，来加深递归的理解

### [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

递归的DFS（深度优先算法）

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
var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }

    const leftNode = maxDepth(root.left);
    const rightNode = maxDepth(root.right);

    const result = Math.max(leftNode, rightNode) + 1;
    return result;
};
```

### 两两交换链表中的节点

[24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    /* 

    
    // 当前节点
    const dummyHead = new ListNode(0);
    
    dummyHead.next = head;
    // 当前节点，而且是在原来的基础上加在前面的
    let temp = dummyHead;
    // 进行迭代
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;
        // 交换之前的节点关系是 temp -> node1 -> node2，交换之后的节点关系要变成 temp -> node2 -> node1
        
        node1.next = node2.next;
        node2.next = node1;  
        temp.next = node2;
        temp = node1;
    }
    // dummyHead 这个一直是头节点
    return dummyHead.next;
     */
    if (head == null || head.next == null) {
        return head;
    }

    const NewHead = head.next;

    head.next = swapPairs(NewHead.next);
    NewHead.next = head;

    return NewHead;

};

```

### 110. 平衡二叉树

[110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

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
