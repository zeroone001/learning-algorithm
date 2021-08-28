## 数据结构与算法之数组

### 二分查找

#### 定义

二分查找，也叫做折半查找，是指在有序数组中查找指定元素的搜索算法

1. 从有序数组的中间元素进行搜索，如果找到，就直接返回
2. 如果目标元素大于中间元素，那么就去右侧区域查找
3. 如果目标元素小于中间元素，就在左侧区域查找
4. 

#### JS实现

```js
// 非递归方法，用的迭代
function binary_search(arr, key) {
  let left = 0; // 定义下标值
  let right = arr.length - 1;
  while (left <= right) {
       let mid = Math.floor((left+right) / 2);
      if (key === arr[mid]) return mid;
    if (arr[mid] > key) {
      // key 在左侧区间
      right = mid - 1;
    }
    if (arr[mid] < key) {
      // key 在右侧区间
      left = mid + 1;
    }
  }
  return -1;
}
// 递归算法
function binary_search(arr, key) {
  if (low > high){
       return -1;
        }
     var mid = parseInt((high + low) / 2);
      if(arr[mid] == key){
        return mid;
     }else if (arr[mid] > key){
        high = mid - 1;
        return binary_search(arr, low, high, key);
     }else if (arr[mid] < key){
        low = mid + 1;
        return binary_search(arr, low, high, key);
     }
}
```



