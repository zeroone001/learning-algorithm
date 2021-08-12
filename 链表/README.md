## 链表

1. 经典，反转链表 demo1


https://leetcode-cn.com/problems/reverse-linked-list/submissions/


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

https://leetcode-cn.com/problems/swap-nodes-in-pairs/


3. 判断链表是否有环 demo3

https://leetcode-cn.com/problems/linked-list-cycle/
