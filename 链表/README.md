## 链表

1. 经典，反转链表 demo1


[https://leetcode-cn.com/problems/reverse-linked-list/submissions/](https://leetcode-cn.com/problems/reverse-linked-list/submissions/)


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
    let current = head;
    let prev = null;
    
    while (current) {
        let tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    }
    return prev;
};
```

2. 两两交换链表中的节点 demo2

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

[https://leetcode-cn.com/problems/swap-nodes-in-pairs/](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)


3. 判断链表是否有环 demo3 环形链表

使用快慢指针来处理问题

[https://leetcode-cn.com/problems/linked-list-cycle/](https://leetcode-cn.com/problems/linked-list-cycle/)

4. 链表中环的检测

5. 两个有序的链表合并

[21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

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

8. 回文链表

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

9. 两两交换链表中的节点

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



