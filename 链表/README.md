# 链表

> [github](https://github.com/zeroone001/learning-algorithm/tree/main/%E9%93%BE%E8%A1%A8)
> [leetcode 链表](https://leetcode-cn.com/tag/linked-list/problemset/)

1. 各种数据结构，不管是队列，栈等线性数据结构还是树，图的等非线性数据结构，
从根本上底层都是数组和链表。
2. 不管你用的是数组还是链表，用的都是计算机内存，
物理内存是一个个大小相同的内存单元构成的
3. 链表是一种物理存储单元上非连续、非顺序的存储结构
4. 链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成
5. 绝大多数的题目都是单链表，而单链表只有一个后继指针。因此只有前序和后序，没有中序遍历。
6. 指针操作是链表的核心
7. 快慢指针： 要找链表中间项就搞两个指针，一个大步走（一次走两步），一个小步走（一次走一步），这样快指针走到头，慢指针刚好在中间；
8. 

## 插入

```js
temp = 待插入位置的前驱节点.next
待插入位置的前驱节点.next = 待插入指针
待插入指针.next = temp
```

## 删除

只需要将需要删除的节点的前驱指针的 next 指针修正为其下下个节点即可，注意考虑边界条件。

```js
待删除位置的前驱节点.next = 待删除位置的前驱节点.next.next
```

## 遍历

```js
/* 迭代 */
当前指针 =  头指针
while 当前节点不为空 {
   print(当前节点)
   当前指针 = 当前指针.next
}
/* 一个前序遍历的递归的伪代码： */
dfs(cur) {
    if 当前节点为空 return
    print(cur.val)
    return dfs(cur.next)
}
/* 链表的尾部添加一个节点 */
// 假设 tail 是链表的尾部节点
tail.next = new ListNode('lucifer')
tail = tail.next
```

## 206. 反转链表

[206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

最经典的一道题目了

双指针解决这个问题

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
var reverseList = function(head) {
    /* 当前指针的前指针， 新增这个指针来处理反转的问题 */
    let prev = null;
    /* 遍历节点的当前指针 */
    let current = head;
    while (current) {
        let tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    }
    return prev;
};
```


## 141. 环形链表

使用快慢指针来处理问题

[141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

```js
/*
    解决方案： 
    1. 硬做，定个0.5秒的时间
    2. Set 判断是否重复，时间复杂度， O(n*1)
    3. 快慢指针。 如果有环的话，快慢会相遇
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    // 如果不是环形的话，那么fast是先走到底的
    // slow 走一步， fast走两步
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true; 
    }
    return false;
};

```

## 142. 环形链表 II

[142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

1. 这个题目有个简单解法，就是加一个flag，但是，有个犯规的意思了，
随着遍历每一个节点都加一个flag，如果，下一个节点有了这个flag，说明找到了这个节点了

2. 正常考察的还是双指针的使用方法

第一步，双指针开始迭代，等到，两个指针相遇
第二步，再建一个从头开始的指针p, p和slow 开始循环，等到两个相遇，就是循环的入口

这里面其实涉及到了数学的逻辑，算出来的

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head；
    let slow = head;

    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        // 先找到快慢指针相遇的地方
        if (slow === fast) {
            let p = head;
            // 再次开始迭代
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }
    return null;
};
```


## 92. 反转链表 II

[92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)


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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let change_len = right - left + 1;

    // 先指针找到left

    let pre_head = null;
    let result = head;

    while (head && --left) {
        pre_head = head;
        head = head.next;
    }

    let modify_list = head;
    let new_head = null;

    while (head && change_len) {
        let tmp = head.next;
        head.next = new_head;
        new_head = head;
        head = tmp;
        change_len--;
    }

    // modify_list 是反转之后的尾结点
    modify_list.next = head;
    if (pre_head) {
        pre_head.next = new_head;
    } else {
        result = new_head;
    }
    return result;
};

```



## 61. 旋转链表

[61. 旋转链表](https://leetcode-cn.com/problems/rotate-list/)

闭合为环

1. 先获取链表的长度
2. 计算要转的次数，n - k % n;
3. 把链表闭合为环，进行旋转while
4. 最后指针指向最后一个节点
5. 截断为null

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (k === 0 || head === null || head.next === null) {
        return head;
    }
    let n:number = 1; // 链表的长度
    let cur: ListNode = head; // 当前指针 
    while (cur.next) {
        cur = cur.next;
        n += 1;
    }

    let addNumber: number = n - k % n; /* 相当于转圈，取余数 */
    /* 正好转到最后，新链表将与原链表相同 */
    if (addNumber === n) {
        return head;
    }
    /* 现在 cur 指向链表的最后一个节点，现在需要连成一个圈 */
    cur.next = head;
    while (addNumber) {
        cur = cur.next;
        addNumber -= 1;
    }
    /* 这个时候，cur 指向了新链表的最后一个节点 */
    let res: ListNode = cur.next;
    /* 截断链表 */
    cur.next = null;
    return res;
};
```

## 160. 相交链表


[160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    if (!a || !b) return null;
    while (a !== b) {
        a = a == null ? headB : a.next;
        b = b == null ? headA : b.next;
    }
    return a;
};
```

## 24. 两两交换链表中的节点

[24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

```js
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
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
// 迭代法
var swapPairs = function(head) {
    // 创建哑结点
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    // 当前节点，而且是在原来的基础上加在前面的
    let temp = dummyHead;
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;
        // 交换之前的节点关系是 temp -> node1 -> node2，交换之后的节点关系要变成 temp -> node2 -> node1
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        // 以上交换完成
        temp = node1;
    }
    return dummyHead.next;
};

/*
思路与算法

也可以通过迭代的方式实现两两交换链表中的节点。
创建哑结点 dummyHead，令 dummyHead.next = head。令 temp 表示当前到达的节点，初始时 temp = dummyHead。每次需要交换 temp 后面的两个节点。
如果 temp 的后面没有节点或者只有一个节点，则没有更多的节点需要交换，因此结束交换。否则，获得 temp 后面的两个节点 node1 和 node2，通过更新节点的指针关系实现两两交换节点。
具体而言，交换之前的节点关系是 temp -> node1 -> node2，交换之后的节点关系要变成 temp -> node2 -> node1，因此需要进行如下操作。


temp.next = node2
node1.next = node2.next
node2.next = node1
完成上述操作之后，节点关系即变成 temp -> node2 -> node1。再令 temp = node1，对链表中的其余节点进行两两交换，直到全部节点都被两两交换。

两两交换链表中的节点之后，新的链表的头节点是 dummyHead.next，返回新的链表的头节点即可。

*/

```

## 86. 分隔链表

[86. 分隔链表](https://leetcode-cn.com/problems/partition-list/)

原理：

创建两个链表，小于x的放在链表A，大于等于x的放在链表B，
最后，把两个链表链接在一起就好了


```js

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let left_head = new ListNode(0);
    let right_head = new ListNode(0);

    let par_left = left_head;
    let par_right = right_head;
    while (head) {
        if (head.val >= x) {
            par_right.next = head;
            par_right = par_right.next;
        } else {
            par_left.next = head;
            par_left = par_left.next;
        }
        head = head.next;
    }
    par_left.next = right_head.next;
    par_right.next = null;
    return left_head.next;
};
```

## 138. 复制带随机指针的链表

[138. 复制带随机指针的链表](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)

原理： 使用Map

两次循环遍历
第一次创建值
第二次遍历，加上next和 random

```js
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let node = head;
    const map = new Map();
    while (node) {
        map.set(node, new Node(node.val));
        node = node.next;
    }
    let current = head;
    while (current) {
        map.get(current).next = current.next ? map.get(current.next) : null;
        map.get(current).random = current.random ? map.get(current.random) : null;
        current = current.next;
    }
    return map.get(head);
}; 
```


4. 链表中环的检测


## 21. 合并两个有序链表

[21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

利用了归并排序的算法

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newNode = new ListNode(-1);
    let prev = newNode; // prev 作为一个指针
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next; // 指针指向下一个，作为当前指针
    }
    if (l1 != null) {
        prev.next = l1;
    }
    if (l2 != null) {
        prev.next = l2;
    }
    return newNode.next;
};
```

## 19. 删除链表的倒数第 N 个结点

删除链表倒数第 n 个结点

方案一， 循环遍历一遍，然后，计算出在第几个是要删除的节点，然后删除
方案二，快慢指针，快指针先走n个节点，然后，再一起走，最后，快指针指向null，慢指针就是要删除的倒数第N个节点

[19. 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

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
 * @param {number} n
 * @return {ListNode}
 */
// 快慢指针处理
var removeNthFromEnd = function(head, n) {
    const newNode = new ListNode(-1);
    newNode.next = head;

    let fast = newNode;
    let slow = newNode;
    // 移动 N + 1步， 目的是方便删除倒数第N个节点
    for(let i = 0; i <=n; i++) {
        fast = fast.next;
    }

    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    // 删除slow节点
    
    let del = slow.next;

    slow.next = del.next;
    del.next = null;

    return newNode.next;
};
```

## 876. 链表的中间结点

[876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

原理： 快慢指针处理这个问题，快指针走两步，慢指针走一步，最后快指针结束的时候，慢指针指向中间节点

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
var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
```


## 234. 回文链表


给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

方案： 1，通过快慢指针找到中间节点；2， 把后面节点reverse反转；3， 两个链表进行比较

[234. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    if (head.next == null) return true;
    // 先找出中间节点
    while (fast != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let right = slow.next;
    slow.next = null;
    let left = head;

    // right 反转
  	// 反转的方法，就是定义一个prev指针，current指向prev
    let current = right;
    let prev = null;
    while (current) {
        let tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    }
    // 两个链表进行对比
    while (left != null && prev != null) {
        if (left.val != prev.val) {
            return false;
        } else {
            left = left.next;
            prev = prev.next;
        }
    }

    return true;
    // 一共三部走

};
```


## 24. 两两交换链表中的节点

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



## 剑指 Offer II 077. 链表排序

[剑指 Offer II 077. 链表排序](https://leetcode-cn.com/problems/7WHec2/)

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
 // 归并排序解决问题
 var sortList = function(head) {
    return mergeSortList(head);
};

 let getMiddleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
// 归并排序
let merge = function (left, right) {
    let result = new ListNode(-1);
    let current = result;

    while (left != null && right != null) {
        if (right.val > left.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    // 差点漏下这个
    current.next = left || right;

    return result.next;
}
let mergeSortList = function (head) {
    if (!head || !head.next) return head;

    let middle = getMiddleNode(head);
    let tmp = middle.next;
    middle.next = null;

    let left = head;
    let right = tmp;

    left = mergeSortList(left);
    right = mergeSortList(right);

    return merge(left, right);
}

```

## 160. 相交链表

[160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

### 解析

使用双指针的方式

情况一：两个链表相交

链表headA 和headB 的长度分别是 mm 和 nn。假设链表 headA 的不相交部分有 aa 个节点，链表 headB 的不相交部分有 bb 个节点，两个链表相交的部分有 cc 个节点，则有 a+c=m，b+c=n。

如果 a=b，则两个指针会同时到达两个链表相交的节点，此时返回相交的节点；

如果 a 不等于b，则指针 pA 会遍历完链表 headA，指针 pB 会遍历完链表headB，两个指针不会同时到达链表的尾节点，然后指针 pA 移到链表 headB 的头节点，指针 pB 移到链表headA 的头节点，然后两个指针继续移动，在指针 pA 移动了 a+c=c+b 次、指针pB 移动了 b+c = c+a 次之后，两个指针会同时到达两个链表相交的节点，该节点也是两个指针第一次同时指向的节点，此时返回相交的节点。

情况二：两个链表不相交

链表headA 和 headB 的长度分别是 mm 和 nn。考虑当 m=n 和 m 不等于 n  时，两个指针分别会如何移动：

如果 m=n，则两个指针会同时到达两个链表的尾节点，然后同时变成空值null，此时返回null；

如果 m 不等于n，则由于两个链表没有公共节点，两个指针也不会同时到达两个链表的尾节点

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
  let b = headB;
  if (!a || !b) return null;
  while (a !== b) {
    // 这里非常非常巧妙，分为相交和不相交两种情况
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
  }
  return a;
};
```

## 206. 反转链表

[206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

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
const reverseList = (head) => {
    let current = head;
    let prev = null;
    let next = head;

    while (current) {
        next = current.next;
        current.next = prev;

        prev = current;

        current = next;
    }
    return prev;

};

var node2 = {val: 1, next: {val:2, next: {val: 3}}};

reverseList(node2);
```




## 23. 合并K个升序链表 （困难）

[23. 合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 归并排序
/* 
这个题目主要是用归并排序去解决

按照归并排序去写，分治的思想
*/
var merge = function(left, right) {
  if (left == null && right == null) {return null;}
  if (left != null && right == null) return left;
  if (left == null && right != null) return right;

  let result = new ListNode(0);
  let current = result;

  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  current.next = left || right;
  return result.next;
};

var mergeLists = function (arr) {
  if (arr.length <= 1) return arr[0];
  let middleIndex = Math.floor(arr.length / 2);
  let left = mergeLists(arr.slice(0, middleIndex));
  let right = mergeLists(arr.slice(middleIndex, arr.length));
  return merge(left, right);
}
var mergeKLists = function(lists) {
	if (lists.length === 0) return null;
  return mergeLists(lists);
};
```

## 25. K 个一组翻转链表 （困难）


[25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

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
 * @param {number} k
 * @return {ListNode}
 */
/* 这个题目用到了递归和链表的反转 */
var reverseLists = function (head, end) {
    // end 节点 用于终止reverse
    let current = head;
    let prev = head;

    while (current != end) {
        let tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    }
    return prev;

};
var reverseKGroup = function(head, k) {
    let left = head; 
    let right = head;

    for (let i= 0; i < k; i++) {
        // 这里的意思是，如果不到k个链表就没有了，说明就不反转了
        if (right == null) return head;
        right = right.next;
    }
    // 此时，left是头节点，right是一组的尾节点

    let newHead = reverseLists(left, right);
    // 这里是转换之后的
    left.next = reverseKGroup(right, k);
    return newHead;
};
```

## 83. 删除排序链表中的重复元素（easy）

[83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/* 
    原理， 1. 遍历，当前的节点跟下一个节点进行比较，如果相等，就指向下一个节点的下一个节点
*/
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let cur: ListNode = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
```

## 82. 删除排序链表中的重复元素 II（ Medium）

[82. 删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/* 主要是做了两层循环 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }

    const dummy = new ListNode(-1, head);

    let cur = dummy;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val;
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            } 
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};
```

## 143. 重排链表 (Medium)

[143. 重排链表](https://leetcode-cn.com/problems/reorder-list/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 1. 把链表的每个节点都存在数组里
 2. 遍历数组进行新的链表的拼接
 */
function reorderList(head: ListNode | null): void {
    const arr = [];
    /* arr 把链表每个字段存起来 */
    while (head) {
        let tmp = head.next;
        head.next = null;
        arr.push(head);
        head = tmp;
    }

    /* 开始拼接 */
    let cur = arr.shift();
    let i = 0;
    while (arr.length) {
        cur.next = i++ % 2 === 0 ? arr.pop() : arr.shift();
        cur = cur.next;
    }
};
```

## 148. 排序链表 (Medium)

[148. 排序链表](https://leetcode-cn.com/problems/sort-list/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/* 两个链表合成一个有序的链表 */
var merge = function (left, right) {
   let result = new ListNode(0);
   let current = result;
   while (left && right){
         if (left.val < right.val) {
           current.next = left;
           left = left.next;
         } else {
           current.next = right;
           right = right.next;
         }
     current = current.next;
   }
   current.next = left || right;
   return result.next
 }
 /* 快慢指针获取中间节点 */
var getMiddleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null && fast.next.next !== null) {
         fast = fast.next.next;
    slow = slow.next;
         }
  return slow;
}
var mergeSort = function (head) {
    // 需要一个结束条件
  if (!head || !head.next) return head;
  // 获取中间节点
  let middle = getMiddleNode(head);
  let tmp = JSON.parse(JSON.stringify(middle.next));
  middle.next = null;
  
  let left = head;
  let right = tmp;
  return merge(mergeSort(left), mergeSort(right));
}
// 归并排序
var sortList = function(head) {
  if (!head || !head.next) return head;
	return mergeSort(head);
};
```

## 2. 两数相加

[2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = null;
    let cur = null;
    let carry: number = 0; /* 进位 */
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        let num = n1 + n2 + carry;
        /* 创建新节点 */
        if (!head) {
            head = cur = new ListNode(num % 10);
        } else {
            cur.next = new ListNode(num % 10);
            cur = cur.next;
        }
        /* 余数 */
        carry = Math.floor(num / 10);
        if(l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }

    } 
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    return head;
};
```

## 109. 有序链表转换二叉搜索树

[109. 有序链表转换二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/* 分治 + 中序遍历 */
function sortedListToBST(head: ListNode | null): TreeNode | null {
    const arr = []
   while(head){
       arr.push(head.val)
       head=head.next
   }
   return buildBST(arr,0,arr.length-1)
   // 根据arr构建BST tree
   function buildBST(arr,start,end){
      if (start > end) return null; // 分治算法的base case
     // 先序遍历
     let mid = Math.floor((start+end)/2)
     const root= new TreeNode(arr[mid])
     root.left = buildBST(arr,start,mid-1)
     root.right=buildBST(arr,mid+1,end)
     return root
   }
};
```

## 114. 二叉树展开为链表

[114. 二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
/* 
    1. 用先序遍历 把节点放在数组里
    2. 遍历数组，list 链表 连起来
*/
function flatten(root: TreeNode | null): void {
    /* 先序遍历，存到数组里 */
    function DFS(root, list) {
        if (!root) return;
        /* 先序遍历 */
        list.push(root);
        DFS(root.left, list);
        DFS(root.right, list);
    }
    const list = [];
    DFS(root, list);
    const len = list.length;
    /* 遍历数组转成 链表 */
    for (let index = 0; index < list.length; index++) {
        let prev = list[index];
        let curr = list[index + 1] ? list[index + 1] : null;

        prev.left = null;
        prev.right = curr;
    }
};
```

## 203. 移除链表元素

[203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let cur = head;
    let prev = new ListNode();
    prev.next = cur;
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
            cur = prev.next;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return prev.next;
};
```

## 237. 删除链表中的节点

[237. 删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
/* 
    相当于把下一个节点变成自身，自身指向下下个节点
*/
function deleteNode(root: ListNode | null): void {
    root.val = root.next.val;
    root.next = root.next.next;
};
```

## 705. 设计哈希集合

[705. 设计哈希集合](https://leetcode-cn.com/problems/design-hashset/)

```ts
class MyHashSet {
    private _base:number = 769;
    constructor() {
        this.data = new Array(this._base).fill(0).map(() => new Array());
    }

    add(key: number): void {
        const h = this.hash(key);
         for (const element of this.data[h]) {
            if (element === key) {
                return;
            }
        }
        this.data[h].push(key);
    }

    hash(key: number): number {
        return key % this._base;
    }

    remove(key: number): void {
         const h = this.hash(key);
        const it = this.data[h];
        for (let i = 0; i < it.length; ++i) {
            if (it[i] === key) {
                it.splice(i, 1);
                return;
            }
        }
    }

    contains(key: number): boolean {
         const h = this.hash(key);
        for (const element of this.data[h]) {
            if (element === key) {
                return true;
            }
        }
        return false;
    }
}

```

## 706. 设计哈希映射

[706. 设计哈希映射](https://leetcode-cn.com/problems/design-hashmap/)

```ts
class MyHashMap {
    myhash: Record<number, number>;
    constructor() {
        this.myhash = {};
    }

    put(key: number, value: number): void {
        this.myhash[key] = value;
    }

    get(key: number): number {
        if(this.myhash[key] || this.myhash[key] === 0) return this.myhash[key];
        else return -1;
    }

    remove(key: number): void {
        delete this.myhash[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
```

## 328. 奇偶链表

[328. 奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list/)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let evenHead = head.next;
    /* 定义两个指针 */
    let odd = head;
    let even = evenHead;
    /* 开始迭代 */
    while (odd.next && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    /* 把偶数链表拼接到奇数链表的后面 */
    odd.next = evenHead;
    return head;
};
```

## 445. 两数相加 II

[445. 两数相加 II](https://leetcode-cn.com/problems/add-two-numbers-ii/)

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* 使用栈来解决这个问题 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];
    /* 进栈 */
    while (l1 || l2) {
        if (l1) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }
    let carry = 0; /* 进位 */
    let resList = null;

    while (stack1.length || stack2.length || carry !== 0) {
        /* 出栈 */
        const s1 = stack1.length ? stack1.pop() : 0;
        const s2 = stack2.length ? stack2.pop() : 0;

        let val = s1 + s2 + carry;
        /* 获取进位值 */
        carry = parseInt(val / 10);
        /* 计算出这个位置的显示的值 */
        let newVal = val % 10;
        /* 往链表前面拼节点 */
        let curList = new ListNode(newVal);
        curList.next = resList;
        resList = curList;
    }
    /* 返回链表 */
    return resList;
};
```

## 1721. 交换链表中的节点

[1721. 交换链表中的节点](https://leetcode-cn.com/problems/swapping-nodes-in-a-linked-list/)

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* 使用快慢指针来处理这个
    只交换val 就可以了
*/
var swapNodes = function(head, k) {
    /* 先创建一个头部节点 */
    let dummy = new ListNode(0);
    dumy.next = head;

    let i = 0;
    /* 快指针和慢指针 */
    let fast = dumy;
    let slow = dumy;
    let nodeK = null; /* 记录第K个节点 */
    /* 找到第K个节点 */
    while (i < k) {
        fast = fast.next;
        i++;
    }
    /* 把第K个节点存起来，后面使用 */
    nodeK = fast;

    /* 快慢指针一起移动，快指针移动到最后，慢指针就是指向了，从后面数第K个节点 */
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    let tmp = nodeK.val;
    nodeK.val = slow.val;
    slow.val = tmp;
    return head;
};
```

## 725. 分隔链表

[725. 分隔链表](https://leetcode-cn.com/problems/split-linked-list-in-parts/)

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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let n = 0;
    let temp = head;
    while (temp != null) {
        n++;
        temp = temp.next;
    }
    let quotient = Math.floor(n / k), remainder = n % k;

    const parts = new Array(k).fill(null);
    let curr = head;
    for (let i = 0; i < k && curr != null; i++) {
        parts[i] = curr;
        let partSize = quotient + (i < remainder ? 1 : 0);
        for (let j = 1; j < partSize; j++) {
            curr = curr.next;
        }
        const next = curr.next;
        curr.next = null;
        curr = next;
    }
    return parts;
};
```

## 817. 链表组件

[817. 链表组件](https://leetcode-cn.com/problems/linked-list-components/)

```js

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    let p = head
    let res = 0
    while (p) {
        if (G.includes(p.val) && (!p.next || !G.includes(p.next.val))) {
            res++
        }
        p = p.next
    }
    return res
};
```

# 掘金 tag

## 面试题 02.01. 移除重复节点

[面试题 02.01. 移除重复节点](https://leetcode-cn.com/problems/remove-duplicate-node-lcci/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* 
    利用哈希表来解决这个问题
*/
var removeDuplicateNodes = function(head) {
    if (head === null) {
        return head;
    }
    const mySet = new Set();
    mySet.add(head.val);
    let prev = head;
    let cur = head.next;
    while (cur) {
        if (mySet.has(cur.val)) {
            /* 删除当前节点 */
            prev.next = cur.next;
            cur = cur.next;
        } else {
            /* 需要把这个放进去 */
            mySet.add(cur.val);
            prev = cur;
            cur = cur.next;
        }
    }
    return head;
};
```

## 面试题 02.06. 回文链表

[面试题 02.06. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list-lcci/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

};
```