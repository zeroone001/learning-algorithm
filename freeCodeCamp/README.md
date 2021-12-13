



# freeCodeCamp

## 基础算法

## **将摄氏度转换为华氏度**

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 +32;
  return fahrenheit;
}

convertToF(30);
```

## **反转字符串**

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```

## **计算整数的阶乘**

```js
function factorialize(num) {
  let res = 1;
  while(num > 0) {
    res *= num;
    num--
  }
  return res;
}

factorialize(5);
```

## **找出字符串中的最长单词**

```js
function findLongestWordLength(str) {
  const arr1 = str.split(/[^a-zA-Z]/);
  const filt = arr1.reduce((prev, next) => {
    return next.length > prev ? next.length : prev;
  }, 0)
  return filt;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

## **找出多个数组中的最大数字**

```js
function largestOfFour(arr) {
  let res = 0;
  res = arr.map(item => {
     return item.reduce((prev, next) => {
      return Math.max(prev, next);
    })
  })
  console.log(res)
  return res;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
```

## **确认结尾**

```js
function confirmEnding(str, target) {
  const reg = new RegExp(target + '$')
  return reg.test(str);
}

confirmEnding("Bastian", "n");
```

## **重复输出字符串**

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) return ''
  let res = ''
  while (num > 0) {
    res += str;
    num--;
  }
  return res;
}

repeatStringNumTimes("abc", 3);
```

## **截断字符串**

```js
function truncateString(str, num) {
  if (num < str.length) {
    return str.slice(0, num) + '...';
  }
  return str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

## **按参数过滤数组**

```js
function findElement(arr, func) {
  let num = arr.filter(item => {
    return func(item);
  });
  return num[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

## **基本类型布尔值的检查**

```js
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);
```

## **句中单词首字母大写**

```js
function titleCase(str) {
  const arr = str.toLowerCase().split(/\s+/g);
  const arr1 = arr.map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1) 
  });

  return arr1.join(' ');
}

titleCase("I'm a little tea pot");
```

## **Slice 与 Splice**

```js
function frankenSplice(arr1, arr2, n) {
  return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

## **过滤数组中的假值**

```js
function bouncer(arr) {
  return arr.filter(item => {
    return item
  });
}

bouncer([7, "ate", "", false, 9]);
```

## **找出元素在排序后数组中的索引**

```js
function getIndexToIns(arr, num) {
  const arr1 = arr.sort((a,b) => {
    return a - b; 
  });
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= num) {
      return i;
    }
  }
  return arr1.length;
}

getIndexToIns([40, 60], 50);
```

## **比较字符串**

```js
function mutation([str1, str2]) {
  const arr = str2.toLowerCase().split('');
  return arr.every(item => {
    return str1.toLowerCase().includes(item)
  })
}

mutation(["hello", "hey"]);
```

## **分割数组**

```js
function chunkArrayInGroups(arr, size) {
  const res = []
  let num = arr.length;
  let index= 0;
  while(index < num) {
    res.push(arr.slice(index, index + size))
    index += size;
  }
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```



## 中级算法

## **范围内的数字求和**

```js
function sumAll([num1, num2]) {
  const count = Math.abs(num2 - num1) +1;
  const res = (num1 + num2) * count >> 1
  return res;
}

sumAll([1, 4]);
```

## **数组的对称差**

```js
function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

