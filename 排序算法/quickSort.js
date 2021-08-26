/* 
    快速排序
    定义两个指针，从两头开始扫描
    左侧指针找比 pivot 大的数字，
    右侧指针找比 pivot 小的数字，
    然后进行交换

*/

function quickSort (arr) {
    quick(arr, 0, arr.length - 1);
}
function quick (arr, left, right) {
    if (left < right) {
        let index = partition(arr, left, right);

        // 递归
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }

        if (index < right) {
            quick(arr, index, right);
        }

    }
}
function partition (arr, left, right) {
    // 定义两个指针
    let i = left;
    let j = right;

    // 获取基准值
    let pivot = Math.floor(Math.random(right - left + 1) + left);

    while (i < j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        // 交换
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }

    }

    return i;
}
function swap (arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}












let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
let partition = (arr, left, right) => {
    // 定义两个指针
    let i = left;
    let j = right;
    // 取一个随机的pivot
    let pivot = Math.floor(Math.random(right - left + 1) + left);
    while (i <= j) {
        // 找到比pivot大的一个数
        while(arr[i] < pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        // 进行交换
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
};

let quick = (arr, left, right) => {
    let index;
    if (left < right) {

        index = partition(arr, left, right); // 返回中位数，一次快排

        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (right > index) {
            quick(arr, index, right);
        }
    }
};

let quickSort = (arr) => {
    quick(arr, 0, arr.length - 1);
}
