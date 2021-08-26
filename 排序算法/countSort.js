/* 
    计数排序

    1. 先查找数组里最大的那个值；
    2. 根据（最大的值+1）创建新的数组，用于将数据值转化为键存储,下标是[0,...,maxValue]


*/

function countSort(arr, n) {
  if (n <= 1) return arr;

  let maxValue = arr[0];
  for (let i = 1; i < n; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  // 存储
  let bucket = new Array(maxValue + 1);

  for (let i = 0; i < n; i++) {
      if (!bucket[i]) {
          bucket[i] = 0;
      }
      bucket[i]++;
  }
  let index = 0;
  for (let j = 0; j < maxValue + 1; j++) {

    while(bucket[j] > 0) {
        arr[index++] = j;
        j--;
    }
  }
  
  return arr;

}

/* function countSort (arr, n) {
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
    var bucket = new Array(maxValue + 1);

    // 计算每个元素的个数，进行存储
    // 这样就得到，以旧数组的值为下标，相同值的个数为值的新数组
    for (let i = 0; i < n; i++) {
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

} */
