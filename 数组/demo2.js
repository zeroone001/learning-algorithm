// 将多维数组扁平化
let arr = [
    [1,2,3],
    [5,6,7],
    [10]
];

// es6 flat
console.log(arr.flat(2));

// 方案二 转换为string

arr = arr.toString().split(',').map(item => parseInt(item));

// 三 循环迭代
let arr = [
    [1,2,3],
    [5,6,7],
    [10]
];
while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
    arr = [...arr]; // 这个是错误的，因为展开后还是本身
}
console.log(arr);

// 递归

// for 循环，然后把不是
let arr = [
    [1,2,3],
    [5,6,7],
    [10]
];
(function() {
    let result = [];
    let _fn = (_arr) => {
        for (let index = 0; index < _arr.length; index++) {
            const element = _arr[index];
            if (Array.isArray(element)) {
                _fn(element)
            }
            result.push(element)
            
        }
    }
    _fn(arr);
    return result;
})()