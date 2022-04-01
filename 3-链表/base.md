## 2. 两数相加

[2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

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
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let cur = null;
    let carry = 0; // 进位
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;

        let num = n1 + n2 + carry;
        
        if (!head) {
            // 第一个节点
            head = cur = new ListNode(num % 10);
        } else {
            // 后续节点
            cur.next = new ListNode(num % 10);
            cur = cur.next;
        }
        // 余数
        carry = Math.floor(num / 10);

        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);

    }
    // 进位
    carry > 0 && (cur.next = new ListNode(carry));
    return head;
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
var reverseList = function(head) {

};
```

## 141. 环形链表

[141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

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
var hasCycle = function(head) {
    
};
```

## 23. 合并K个升序链表

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
var mergeKLists = function(lists) {

};
```

## 147. 对链表进行插入排序

[147. 对链表进行插入排序](https://leetcode-cn.com/problems/insertion-sort-list/)

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
var insertionSortList = function(head) {

};
```

## 148. 排序链表

[148. 排序链表](https://leetcode-cn.com/problems/sort-list/)

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
var sortList = function(head) {

};
```

## 707. 设计链表

[707. 设计链表](https://leetcode-cn.com/problems/design-linked-list/)

```js
var MyLinkedList = function() {

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```