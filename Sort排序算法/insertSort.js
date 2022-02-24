/* 
    插入排序
    原理，构建有序序列，对未排序的部分，
    对已排序的序列中从后往前扫描（注意，这里每次扫描都要移动位置，这样才能插入），
    然后插入

*/
/* 
    插入算法的核心思想是取未排序区间中的元素，
    在已排序区间中找到合适的插入位置将其插入，
    并保证已排序区间数据一直有序。
    重复这个过程，
    直到未排序区间中元素为空，算法结束。
*/

function insertSort (arr) {
    const arrlength = arr.length;
    if (arrlength <= 1) return arr;

    let current;
    let prevIndex;

    for(let i = 1; i < arrlength; i++) {
        current = arr[i];
        prevIndex = i - 1;

        // 迭代有序数组,从后往前遍历
        while(prevIndex >= 0 && arr[prevIndex] > current) {
            arr[prevIndex + 1] = arr[prevIndex];
            prevIndex--;
        }
        arr[prevIndex] = current;
    }
    return arr;
}

function insertionSort(arr) {
    let n = arr.length;
    let preIndex, current;
    for (let i = 1; i < n; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

// [147. 对链表进行插入排序](https://leetcode-cn.com/problems/insertion-sort-list/)

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
    if (head == null) return;
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let lastSort = head; // 新链表的最后一个元素
    let cur = head.next;

    
    while (cur != null) {
        if (cur.val >= lastSort.val) {
            lastSort = lastSort.next;
        } else {
            let prev = dummyHead;
            while (prev.next.val <= cur.val) {
                prev = prev.next;
            }
            lastSort.next = cur.next;
            cur.next = prev.next;
            prev.next = cur;
        }
        cur = lastSort.next;
    }
    return dummyHead.next;
};
