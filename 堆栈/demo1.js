// 1. 大中小括号，是否合法？

// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let strObj = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    // 这里可以改为for of 循环字符串
    for(let item of s){
        let item = strArr[i];
        if (item === '(' || item === '[' || item === '{') {
            arr.push(item);
        } else {
            if (strObj[item] !== arr.pop()) return false;
        }

    }
    return arr.length === 0;
};
