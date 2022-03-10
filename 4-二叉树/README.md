# [二叉树](https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree)

非线性结构

1. 完全二叉树 （适合数组存储）
2. 满二叉树
3. 二叉搜索树 BST
4. 平衡二叉树
5. 红黑树

面试中常考的树： 普通二叉树，平衡二叉树，完全二叉树，二叉搜索树，红黑树

树的前序遍历，到中序遍历，后续遍历，以至于层次遍历（递归和非递归写法）

## 满二叉树

叶子节点全都在最底层，除了叶子节点之外，每个节点都有左右两个子节点，这种二叉树就叫做满二叉树。

## 完全二叉树


完全二叉树要求，除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列

针对空间利用率设计出来的数据结构

## 深度优先 DFS


## 广度优先 BFS

## 一个中心

树的遍历

## 两个基本点

1. BFS
2. DFS

DFS 分为前中后序遍历， DFS适合做一些暴力枚举的题目，DFS如果借助函数调用栈，可以轻松的时候递归来实现
BFS 分为带层的和不带层的
BFS，适合求最短的距离，这个和层次遍历是不一样的


DFS 

```js
const visited = {}
function dfs(i) {
    if (满足特定条件）{
        // 返回结果 or 退出搜索空间
    }

    visited[i] = true // 将当前状态标为已搜索
    for (根据i能到达的下个状态j) {
        if (!visited[j]) { // 如果状态j没有被搜索过
            dfs(j)
        }
    }
}
// 二叉树
function dfs(root) {
    if (满足特定条件）{
        // 返回结果 or 退出搜索空间
    }
    dfs(root.left)
    dfs(root.right)
}
```

DFS最常见的分类是前序遍历和后序遍历

```js
// 前序遍历
function dfs(root) {
    if (满足特定条件）{
        // 返回结果 or 退出搜索空间
    }
    // 主逻辑在这里执行
    dfs(root.left)
    dfs(root.right)
}
// 后序遍历
function dfs(root) {
    if (满足特定条件）{
        // 返回结果 or 退出搜索空间
    }
    dfs(root.left)
    dfs(root.right)
    // 主逻辑在这里执行
}
```
如果主逻辑在前面执行，那么就是前序遍历，如果主逻辑在后面执行，就是后序遍历

DFS借助栈来完成

BFS 需要借助队列来完成

BFS有两种类型

原理上就是一个队列，放进去root，然后，取出来，判断，再把左右节点放进去，再取出左节点，。。。。
对二叉树横向的遍历

有标记层

```js
class Solution:
    def bfs(k):
        # 使用双端队列，而不是数组。因为数组从头部删除元素的时间复杂度为 N，双端队列的底层实现其实是链表。
        queue = collections.deque([root])
        # 记录层数
        steps = 0
        # 需要返回的节点
        ans = []
        # 队列不空，生命不止！
        while queue:
            size = len(queue)
            # 遍历当前层的所有节点
            for _ in range(size):
                node = queue.popleft()
                if (step == k) ans.append(node)
                if node.right:
                    queue.append(node.right)
                if node.left:
                    queue.append(node.left)
            # 遍历完当前层所有的节点后 steps + 1
            steps += 1
        return ans
```


不标记层

```js
class Solution:
    def bfs(k):
        # 使用双端队列，而不是数组。因为数组从头部删除元素的时间复杂度为 N，双端队列的底层实现其实是链表。
        queue = collections.deque([root])
        # 队列不空，生命不止！
        while queue:
            node = queue.popleft()
            # 由于没有记录 steps，因此我们肯定是不需要根据层的信息去判断的。否则就用带层的模板了。
            if (node 是我们要找到的) return node
            if node.right:
                queue.append(node.right)
            if node.left:
                queue.append(node.left)
        return -1
```

```js
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

## 三种题型

1. 搜索类 (BFS, DFS)
2. 构建类 (普通二叉树的构建，二叉搜索树的构建)
3. 修改类 （题目要求的修改， 算法需要，自己修改）

构建类，分为普通二叉树的构建，和二叉搜索树的构建

## 四个重要概念

1. 二叉搜索树 （没有键值相等的节点）

二叉搜索树的中序遍历的结果是一个有序的数组

【中序遍历是有序的】 这个知识点很关键，用于处理一些BST的算法题目

2. 完全二叉树

一棵深度为 k 的有 n 个结点的二叉树， 对树中的节点，从上到下，从左到右，进行编号，如果编号为 i（1≤i≤n）的结点与满二叉树中编号为 i 的结点在二叉树中的位置相同，则这棵二叉树称为完全二叉树

3. 路径
4. 距离

## 7个技巧

1. DFS
2. 单双递归
3. 前后遍历

大多数树的题使用后序遍历比较简单，并且大多需要依赖左右子树的返回值

4. 虚拟节点
类似链表，创建一个虚拟根节点

5. 边界

判断条件
if(root == null) return;

6. 参数扩展法
path 携带，也是常用的
这个很常用，爱不释手

7. 返回元组，列表

这个技巧和参数扩展有异曲同工之妙，只不过一个作用于函数参数，一个作用于函数返回值。

树的题目一种中心点就是遍历，这是搜索问题和修改问题的基础。
而遍历从大的方向分为广度优先遍历和深度优先遍历，这就是我们的两个基本点。两个基本点可以进一步细分，比如广度优先遍历有带层信息的和不带层信息的（其实只要会带层信息的就够了）。深度优先遍历常见的是前序和后序，中序多用于二叉搜索树，因为二叉搜索树的中序遍历是严格递增的数组。
树的题目从大的方向上来看就三种，一种是搜索类，这类题目最多，这种题目牢牢把握开始点，结束点 和 目标即可。构建类型的题目我之前的专题以及讲过了，一句话概括就是根据一种遍历结果确定根节点位置，根据另外一种遍历结果（如果是二叉搜索树就不需要了）确定左右子树。修改类题目不多，这种问题边界需要特殊考虑，这是和搜索问题的本质区别，可以使用虚拟节点技巧。另外搜索问题，如果返回值不是根节点也可以考虑虚拟节点。

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

};
```