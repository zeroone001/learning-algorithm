



# freeCodeCamp

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

