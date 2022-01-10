## 对称二叉树

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是镜像对称的。

```js
    1
   / \
  2   2
 / \ / \
3  4 4  3

```

1. 递归实现

```js
// 下面是递归实现
class Solution {
    constructor (node) {
        this.isSymmetric(node);
    }
    isSymmetric (node) {
        const result = this.check(node.left, node.right);
        console.log('result', result);
    }
    check (left, right) {
        // 两个镜像节点都为null 说明是对应的
        if (left === null && right === null) return true;
        // 下面返回FALSE 说明不对称
        // 两个根节点中至少有一个为空时
        if (left === null || right === null) return false;
        // 两个根节点的值不等时
        if (left.value !== right.value) return false;
        
        return this.check(left.left, right.right) && this.check(left.right, right.left);
    }
}
const arr = [1,2,2,3,4,4,5];
const the_node = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    }
}
const SolutionThe = new Solution(the_node);

// 方法二 队列解决问题
const the_node = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    }
}
class Solution2 {
    constructor (node) {
        this.isSymmetric(node);
    }
    isSymmetric (node) {
        const result = this.check(node.left, node.right);
        console.log('result------>', result);
    }
    check (left, right) {
        const arr = [];
        arr.push(left);
        arr.push(right);

        while (arr.length) {
            let p = arr.shift();
            let q = arr.shift();

            if(p === null && q === null){
                continue;
            }
            if(p === null || q === null){
                return false;
            }
            if(p.value !== q.value){
                return false;
            }
            arr.push(p.left);
            arr.push(q.right);

            arr.push(p.right);
            arr.push(q.left);

        }
        return true;
    }
}

const s2 = new Solution2(the_node);
```
