# 字符串常考察的算法


## 5. 最长回文子串

[5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)


```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return s;
    let maxRes = 0, maxStr = '';
    for (let i = 0; i < s.length; i++) {
        let str1 = palindrome(s, i, i);
        let str2 = palindrome(s, i, i + 1);   
        if (str1.length > maxRes) {
            maxStr = str1;
            maxRes = str1.length;
        }
        if (str2.length > maxRes) {
            maxStr = str2;
            maxRes = str2.length;
        }
    }
    return maxStr;
};
function palindrome(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return s.slice(l + 1, r);
}
```

## 6. Z 字形变换

[6. Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion)

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const n = s.length, r = numRows;
    if (r === 1 || r >= n) {
        return s;
    }
    const t = r * 2 - 2;
    const ans = [];
    for (let i = 0; i < r; i++) { // 枚举矩阵的行
        for (let j = 0; j < n - i; j += t) { // 枚举每个周期的起始下标
            ans.push(s[j + i]); // 当前周期的第一个字符
            if (0 < i && i < r - 1 && j + t - i < n) {
                ans.push(s[j + t - i]); // 当前周期的第二个字符
            }
        }
    }
    return ans.join('');
};
```

## 13. 罗马数字转整数

[13. 罗马数字转整数](https://leetcode.cn/problems/roman-to-integer/)

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);  
    let res = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = symbolValues.get(s[i]);
        if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
            res -= value;
        } else {
            res += value;
        }
    }
    return res;
};
```

## 415. 字符串相加

[415. 字符串相加](https://leetcode-cn.com/problems/add-strings/)

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//  function appendZero(str,len){
//     // for(let i=0;i<len;i++){
//     //     str='0'+str;
//     // }
//     // 或者使用ES6的repeat
//     // str = '0'.repeat(len) + str;
//     return str.padStart(len, '0');
// }
var addStrings = function(a, b) {
      // 获取各自长度
    let i = a.length,j = b.length;
    // 判断谁大一些
    let len = i - j;
    let sum,sumArr = [];
    // 谁小，就在谁的前面补0，让两个长度相同
    // a = '12345678' b = '00456789'
    if(len > 0){
        // b = appendZero(b,i);
        b = b.padStart(i, '0');
    }else if(len<0){
        // 这个地方要把len变成正数
        // a = appendZero(a,j);
        a = a.padStart(j, '0');
        // 当b的长度比a大时，就把b的长度给i
        i = j;
    }
    // 由于日常运算都是从右往左，所以，我们反转数组
    let aArr = a.split('').reverse(), bArr = b.split('').reverse();
    for(let m = 0;m < i;m++){
        // 数组长度相同，同一位置的两个元素相加
        // 如果当前sumArr有值，说明可能是前面以为满10进了一个1
        let c = parseInt(aArr[m])+parseInt(bArr[m]) + (sumArr[m] || 0);
        if(c > 9){
            // 进10后，取余数
            sumArr[m] = c%10;
            // 如果进10了，则会往数组后一个元素放一个1
            sumArr[m+1] = parseInt(sumArr[m+1] || 0)+1;
        }else{
            sumArr[m] = c;
        }
    }
    // 最后数组反转，再合并成一个字符串
    sum = sumArr.reverse().join('');
    return sum;
};
```

## 28. 实现 strStr()

[28. 实现 strStr()](https://leetcode.cn/problems/implement-strstr/)

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 暴力实现
var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    for (let i = 0; i + m <= n; i++) {
        let flag = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return i;
        }
    }
    return -1;
};
```

## 58. 最后一个单词的长度

[58. 最后一个单词的长度](https://leetcode.cn/problems/length-of-last-word/)

```js

/**
 * @param {string} s
 * @return {number}
 */
// 反向遍历
var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    while (s[index] == ' ') {
        index--;
    }
    let res = 0;
    while (s[index] !== ' ' && index >=0) {
        res++;
        index--;
    }
    return res;
};
```

## 67. 二进制求和

[67. 二进制求和](https://leetcode.cn/problems/add-binary/)

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const arr1 = a.split('');
    const arr2 = b.split('');

    let res = [];
    let jinwei = 0;
    while(arr1.length || arr2.length) {
        let num1 = Number(arr1.pop()) || 0;
        let num2 = Number(arr2.pop()) || 0;

        let sum = num1 + num2 + jinwei;
        console.log(sum)
        if (sum > 1) {
            jinwei = 1;
            sum = sum % 2;
        } else {
            jinwei = 0;
        }

        res.unshift(sum);
    }
    jinwei && res.unshift(1);

    return res.join('');
};
```


## 125. 验证回文串

[125. 验证回文串](https://leetcode.cn/problems/valid-palindrome/)

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newStr = s.replace(/[^\w]/g, '').toLocaleLowerCase();
    for(let i = 0; i < newStr.length / 2; i++ ){
        if(newStr[i] !== newStr[newStr.length - i - 1]) {
            return false
        }
    }
    return true;
};
```

## 168. Excel表列名称

[168. Excel表列名称](https://leetcode.cn/problems/excel-sheet-column-title/)

```js
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

};
```