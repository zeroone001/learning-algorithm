# 二叉树

[https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree](https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree)

非线性结构

1. 完全二叉树 （适合数组存储）
2. 满二叉树
3. 二叉搜索树
4. 平衡二叉树
5. 红黑树


## 满二叉树

叶子节点全都在最底层，除了叶子节点之外，每个节点都有左右两个子节点，这种二叉树就叫做满二叉树。

## 完全二叉树


完全二叉树要求，除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列

针对空间利用率设计出来的数据结构

## 怎么存储一个二叉树


## 深度优先


## 广度优先

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
## 三种题型

1. 搜索类 (BFS, DFS)
2. 构建类 (普通二叉树的构建，二叉搜索树的构建)
3. 修改类 （题目要求的修改， 算法需要，自己修改）


构建类，分为普通二叉树的构建，和二叉搜索树的构建

## 四个重要概念

1. 二叉搜索树
2. 完全二叉树
3. 路径
4. 距离

## 7个技巧


1. DFS
2. 单双递归
3. 前后遍历
4. 虚拟节点
5. 边界
6. 参数扩展法
7. 返回元组，列表



## 树的遍历迭代写法



