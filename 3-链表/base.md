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
    if (!head) return;
    let res = new ListNode(0);
    res.next = head;
    let cur = head.next;
    let lastSort = head;

    while (cur !== null) {
        if (cur.val >= lastSort.val) {
            lastSort = lastSort.next;
        } else {
            let prev = res;
            while (prev.next.val <= cur.val) {
                prev= prev.next;
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

## 707. 设计链表

[707. 设计链表](https://leetcode-cn.com/problems/design-linked-list/)

```js
class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function() {
    this._size = 0;
    this._tail = null;
    this._head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index >= this._size) return null;
    // 创建虚拟头节点
    let cur = new LinkNode(0, this._head);
    // 0 -> head
    while(index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1;
    // 获取当前节点
    return this.getNode(index).val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new LinkNode(val, this._head);
    this._head = node;
    this._size++;
    if(!this._tail) {
        this._tail = node;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new LinkNode(val, null);
    this._size++;
    if(this._tail) {
        this._tail.next = node;
        this._tail = node;
        return;
    }
    this._tail = node;
    this._head = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this._size) return;
    if(index <= 0) {
        this.addAtHead(val);
        return;
    }
    if(index === this._size) {
        this.addAtTail(val);
        return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1);
    node.next = new LinkNode(val, node.next);
    this._size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this._size) return;
    if(index === 0) {
        this._head = this._head.next;
        this._size--;
        return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1);    
    node.next = node.next.next;
    // 处理尾节点
    if(index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
};

// MyLinkedList.prototype.out = function() {
//     let cur = this._head;
//     const res = [];
//     while(cur) {
//         res.push(cur.val);
//         cur = cur.next;
//     }
// };
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