/* 
    归并排序
    经典题目，两个有序的链表
    
*/
function mergeSort(arr) {
    let array = mergeSortRec(arr)
    return array
}
// 递归
function mergeSortRec (arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);

    return merge(mergeSortRec(leftArr), mergeSortRec(rightArr));
}

function merge (leftArr, rightArr) {
    let result = [];
    let lefti = 0;
    let righti = 0;

    while (lefti < leftArr.length && righti < rightArr.length) {
        if (leftArr[lefti] <= rightArr[righti]) {
            result.push(leftArr[lefti]);
            lefti++;
        } else {
            result.push(rightArr[righti]);
            righti++;
        }
    }

    while (lefti < leftArr.length) {
        result.push(leftArr[lefti]);
        lefti++;
    }
    while (lefti < rightArr.length) {
        result.push(rightArr[righti]);
        righti++;
    }

    return result;
}


