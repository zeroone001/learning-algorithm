# 数组

>有没有想过为啥只有二叉树，而没有一叉树。实际上链表就是特殊的树，即一叉树

对数组头部的插入和删除时间复杂度都是$O(N)$，而平均复杂度也是$O(N)$，
只有对尾部的插入和删除才是$O(1)$

数组对查询特别友好，对删除和添加不友好

## 将多维数组扁平化

```js
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
```
## 674. 最长连续递增序列

[674. 最长连续递增序列](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
  利用双指针来解决这个问题，
通过迭代，不断的计算一个最大的递增数
*/
var findLengthOfLCIS = function(nums) {
	const num = nums.length;
  if (nums === 0) return 0;
  let left = 0;
  let right = 1;
  // 这里要一定要注意，一定要设置成1，这里是关键
  let maxValue = 1;
  let count = 1;
  while (right < num) {
    if (nums[left] < nums[right] ) {
      count++;
    } else {
      count = 1;
    }
    left++;
    right++;
    maxValue = Math.max(count, maxValue);
  }
  return maxValue;
};
```

