/*
    解决方案： 
    1. 硬做，定个0.5秒的时间

    2. Set 判断是否重复，时间复杂度， O(n*1)

    3. 快慢指针。 如果有环的话，快慢会相遇


*/

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
