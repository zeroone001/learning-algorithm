# 链表



## 1. 经典，反转链表 

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

[206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)


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
    let prev = null;
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

## 两两交换链表中的节点


给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

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


## 判断链表是否有环  环形链表

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



```js
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
};
```


4. 链表中环的检测

5. 两个有序的链表合并

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

6. 删除链表倒数第 n 个结点

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

7. 求链表的中间结点

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



#### 回文链表



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



#### 两两交换链表中的节点



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



#### 链表排序



[leetcode地址](https://leetcode-cn.com/problems/7WHec2/)

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

