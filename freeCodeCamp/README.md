



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
  return arr1.concat(arr2).filter(item => {
    return !arr1.includes(item) || !arr2.includes(item)
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## **过滤数组元素**

```js
function destroyer(arr, ...args) {

  return arr.filter(item => {
    return !args.includes(item);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 4);
```

## **找出包含特定键值对的对象**

```js
function whatIsInAName(collection, source) {
  const arr = [];
  // 只修改这一行下面的代码
  const keys = Object.keys(source);
  // 只修改这一行上面的代码
  return collection.filter(item => {
      return keys.every((key) => {
          return item.hasOwnProperty(key) && item[key] === source[key]
      })
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

## **短线连接格式**

```js
function spinalCase(str) {
  let reg = /\s+|_+/g
  // 先把空格整出来
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(reg, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
```

## **儿童黑话**

```js
function translatePigLatin(str) {
  const yuan = 'aeiou';
  if (yuan.includes(str.charAt(0))) {
    return str + 'way'
  } else {
    let index = 0;
    while(!yuan.includes(str.charAt(index))) {
      index++;
    }
    return str.slice(index) + str.slice(0, index) + 'ay'
  }
}

translatePigLatin("consonant");
```

## **搜索与替换**

```js
function myReplace(str, before, after) {
  let reg = /^[A-Z]/g
  if (reg.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

## **DNA 配对**

```js
function pairElement(str) {
  const obj = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  }
  const res = []
  for(let i = 0; i < str.length; i++) {
    let a = [str[i], obj[str[i]]];
    res.push(a);
  }
  return res;
}

pairElement("GCG");
```

## **寻找缺失的字母**

```js
function fearNotLetter(str) {
  for(let i = 0; i< str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }

  return undefined
}

fearNotLetter("abce");
```

## **集合排序**

```js
function uniteUnique(...args) {
  const arr = args.flat(Infinity);
  const set = new Set(arr);
  return [...set];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

## **转换 HTML 字符实体**

```js
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, m => {
    return htmlEntities[m];
  });
}

convertHTML("Dolce & Gabbana");
```

## **求斐波那契数列中的奇数之和**

```js
function sumFibs(num) {
    let prev = 0;
    let cur = 1;
    let res = 0;
    while(cur <= num) {
        if (cur % 2 != 0) {
            // 奇数
            res += cur;
        }
        cur = prev + cur;
        prev = cur - prev;
    }
  return res;
}

sumFibs(4);
```

## **质数求和**

```js
function sumPrimes(num) {
    let res = 0;
    let cur = 2;
    function isPrime (num) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false
            }
            
        }
        return true;
    }
    while (cur <= num) {
        if(isPrime(cur)) {
            res += cur;
        }
        cur += 1;
    }
  return res;
}

sumPrimes(10);
```

## **找出数字范围内的最小公倍数**

```js
function smallestCommons(arr) {
    const [min, max] = arr.sort((a,b) => a-b);
    // 先生成一个排序数组
    const rangeArr = Array(max-min+1).fill(0).map((item, index) => {
        return min+index;
    });
    // 计算一个所有值的乘积
    const upper = rangeArr.reduce((prev, cur) => {
        return prev * cur;
    });
    // 循环找到最小的公倍数
    for (let i = max; i <= upper; i+=max ) {
        const p = rangeArr.every(item => {
            return i % item === 0;
        });
        if (p) {
            return i;
        }
    }
}

smallestCommons([1,5]);
```

## **根据参数删除数组元素**

```js
function dropElements(arr, func) {
  while(arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

## **数组扁平化**

不能使用 `arr.flat(Infinity)`

那么只能使用递归来解决了，可以使用for 循环判断元素有没有数据，然后递归

下面是另一种递归

```js
function steamrollArray(arr) {
 	const res = [].concat(...arr);
    return res.some(item => {
        return Array.isArray(item) 
    }) ? steamrollArray(res) : res
}

steamrollArray([1, [2], [3, [[4]]]]);
```

## **翻译二进制字符串**

[翻译二进制字符串](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents)

```js
function binaryAgent(str) {
    let res = [];
    const arr = str.split(' ');
  	return arr.map(item => {
        let asciiCode = parseInt(item, 2);
        let charValue = String.fromCharCode(asciiCode);
        return charValue
    }).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

```js
// 字符串转二进制
function strToBinary (str) {
    let list = str.split('');
    return list.map(item => {
        return item.charCodeAt().toString(2);
    }).join(' ');
}
strToBinary('我们')
```

## **一切都是True**

```js
function truthCheck(collection, pre) {
  return collection.every(item => {
    return item[pre]
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

## **可选参数**

```js
function addTogether(...args) {
  if (args.length === 1) {
    let a = args[0]
    if (typeof a === 'number') {
      return function (b) {
        return typeof b === 'number' ? a+b : undefined;
      }
    }
  } else {
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return args[0] + args[1]
    }
  }
  return undefined;
}

addTogether(2,3);
```

## **创建一个人员对象**

```js
const Person = function(firstAndLast) {
  // 只修改这一行下面的代码
  // 完成下面的方法，其余的执行类似
  var firstAndLast = firstAndLast;
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };
  this.setFirstName = function(str) {
    firstAndLast = `${str} ${firstAndLast.split(' ')[1]}`
  };
  this.setLastName = function(str) {
    firstAndLast = `${firstAndLast.split(' ')[0]} ${str}`
  };
  this.setFullName = function(str) {
    firstAndLast = str;
  };
  
};

const bob = new Person('Bob Ross');
bob.getFullName();
```

## **计算轨道周期**

```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.forEach(function(item) {
    const tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    delete item.avgAlt;
    item.orbitalPeriod = tmp;
  });

  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```



# JS 算法和数据结构项目



## **回文检查器**

[**回文检查器**](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)

```js
function palindrome(str) {
  const str1 = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = str1.length - 1;
  while (left < right && str1[left] === str1[right]) {
    left++;
    right--;
  }

  return str1[left] === str1[right];
}

palindrome("eye");
```

## **罗马数字转换器**

```js
function convertToRoman(num) {
  var roman =  {"M" :1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};
  var str = "";

  for (var i of Object.keys(roman) ) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}

convertToRoman(36);
```

## **凯撒密码**

```js
function rot13(str) {
  let left = 'A'.charCodeAt();
  let right = 'Z'.charCodeAt();
  return str.replace(/[A-Z]/g, match => {
    let code = match.charCodeAt() - 13;
    if (code < left) {
      code = match.charCodeAt() + 13;
    }
    return String.fromCharCode(code)
  });
}

rot13("SERR PBQR PNZC");
```

## **电话号码检查器**

```js
```

