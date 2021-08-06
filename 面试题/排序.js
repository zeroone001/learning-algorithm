// 冒泡排序

/*
    双循环，加创建一个变量，实现位置交换
*/ 
function bubble () {

}

// 插入排序

/*
    先循环，创建一个空数组，然后，往新数组里面插入数据，插入之前先跟数组内的值进行比较，然后插入splice
*/

// 快速排序

/*
    取出中间项，然后准备两个数组，比他大的放右边，比他小的放左边
    递归遍历
    最后concat一起
*/

function quick (arr) {
    let middleIndex = Math.floor(arr.length / 2);
    let middleValue = arr.splice(middleIndex, 1)[0];

    let leftArr = [];
    let rightArr = [];

    for (let i = 0;i< arr.length; i++) {
        if (arr[i] < middleValue) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
        
    }
    return quick(leftArr).concat(middleValue, quick(rightArr));
}