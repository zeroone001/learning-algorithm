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
    const dummyHead = new ListNode(0);

    dummyHead.next = head;

    let tmp = dummyHead;

    while(tmp.next != null && tmp.next.next != null) {
        let node1 = tmp.next;
        let node2 = tmp.next.next;
        /* 进行交换 */
        node1.next= node2.next;
        node2.next = node1;
        tmp.next = node2;
        tmp = node1;
    }

    return dummyHead.next;
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
    let cur = head;
    let prev = null;

    while (cur) {
        let tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    return prev;
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
    let slow = head;
    let fast = head;
    /* 快慢指针 */
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast= fast.next.next;

        if (slow == fast) return true;
    }
    return false;
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
    if (!head) return [];
    let res = new ListNode(0);
    res.next = head;
    let cur = head.next;
    let lastSort = head;
    /* 从第二个元素开始往后遍历 */
    while (!cur) {
        if (cur.val >= lastSort.val) {
            lastSort = lastSort.next;
        } else {
            /* 从头开始遍历 */
            let prev = res;
            while (prev.next.val <= cur.val) {
                prev = prev.next;
            }
            lastSort.next = cur.next;
            cur.next = prev.next;
            prev.next = cur;
        }
        cur = lastSort.next;
    }
    return res.next;
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