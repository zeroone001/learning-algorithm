/* 
   经典 归并排序链表
*/

function sortList (head) {
    return mergeSortList(head);
}
function mergeSortList (head) {
    if (!head || !head.next) return head;
    let middle = getMiddleNode(head);
    let tmp = middle.next;
    middle.next = null;
    let left = head;
    let right = tmp;
    // 执行递归
    left = mergeSortList(left);
    right = mergeSortList(right);
    return merge(left, right);
}

// 获取中间节点
// 利用快慢指针的方式去寻找
function getMiddleNode (head) {
    let slow = head;
    let fast = head;
    // 如果数量是偶数的话，返回第一个节点
    while (fast != null && fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
// 一次归并操作
function merge (left, right) {
    let result = new ListNode(0);
    // 需要加一个指针
    let current = result;
    while (left && right) {
        if (left.value > right.value) {
            current.next = right;
            right = right.next;
        } else {
            current.next = left;
            left = left.next;
        }
        // 这里指针移动到下一位
        current = current.next;
    }
    result.next = left || right;
    // while (left != null) {
    //     result.next = left;
    //     left = left.next;
    // }
    // while (right != null) {
    //     result.next = right;
    //     right = right.next
    // }
    return result.next;
}
