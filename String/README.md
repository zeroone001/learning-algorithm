# 字符串常考察的算法

1. 如何判断一个字符串是否是回文字符串的问题？

## 5. 最长回文子串

[5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

> 题解

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