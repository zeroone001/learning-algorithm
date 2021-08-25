## 时间复杂度 O(n) 的排序算法



时间复杂度 O(n)

又叫做，线性排序

下面三个排序算法是，不基于比较的排序算法，不涉及元素之间的比较

对要排序的数据要求很苛刻，需要适用场景



#### 计数排序 VS 桶排序 VS 基数排序

* 计数排序：每个桶只存单一键值
* 桶排序： 每个桶存储一定范围的数值
* 基数排序：根据键值的每位数字来分配桶







### 计数排序



* 计数排序，不是基于比较的排序算法；
* 核心是将输入的数据值转化为键存储在额外开辟的数组空间中
* 是一种拿空间换时间的算法
* 计数排序只能用在数据范围不大的场景中，如果数据范围K要比排序的数据n大很多，就不适用计数排序了
* 要转化成非负整数

- 时间复杂度：O(n+k)
- 空间复杂度：O(n+k)



##### 原理



1. 先查找数组里最大的那个值；
2. 根据（最大的值+1）创建新的数组，用于将数据值转化为键存储,下标是[0,...,maxValue]
3. 存储：计算每个元素的个数，进行存储，这样就得到，以旧数组的值为下标，相同值的个数为值的新数组
4. 这里有个很巧妙的地方，就是bucket这个数组，相当于根据下标值排完序了
5. 直接从小到大进行遍历



```js
function countSort (arr, n) {
    if (arr.length <= 1) return arr;
    // 先查找数组里最大的那个值；
    let maxValue = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] >= maxValue) {
            maxValue = arr[i];
        }
    }

    // 创建新的数组，用于将数据值转化为键存储
    // 下标是[0,...,maxValue]
    let bucket = new Array(maxValue + 1);

    // 计算每个元素的个数，进行存储
    // 这样就得到，以旧数组的值为下标，相同值的个数为值的新数组
    for (let i =0; i < n; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    // PS: 这里有个很巧妙的地方，就是bucket这个数组，相当于根据下标值排完序了
    // 所以，直接从小到大进行遍历就好了
    // 对这个新数组进行遍历
    let index = 0;
    for (let j = 0; j < maxValue + 1; j++) {
        // 当bucket有值的时候，赋给arr
        while (bucket[j] > 0) {
            arr[index++] = j;
            bucket[j]--;
        }
    }

}
```







### 桶排序

Bucket sort

- 时间复杂度：O(n)
- 空间复杂度：O(n)







```js
// 桶排序
let bucketSort = (arr) => {
    let bucket = [], res = []
    arr.forEach((value, key) => {
        // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
        if(!bucket[value]) {
            bucket[value] = [key]
        } else {
            bucket[value].push(key)
        }
    })
    // 遍历获取出现频率
    for(let i = 0;i <= bucket.length - 1;i++){
        if(bucket[i]) {
            res.push(...bucket[i])
        }
 }
 return res
}
```





### 基数排序



#### 原理









