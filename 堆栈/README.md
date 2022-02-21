# 堆栈 stack

定义： 先入后出

实现： 数组或者链表， 可以理解为，push + pop 

查找： O(n) 查找比较慢

插入，删除： O(1) 

## 20. 有效的括号

[20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

```js
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
```


## 224. 基本计算器

字节跳动的面试题, 重要，还挺难的

[224. 基本计算器](https://leetcode-cn.com/problems/basic-calculator/)

```js
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [1];
    let sign = 1;

    let i = 0;
    let n = s.length;

    let result = 0;

    while (i < n) {
        if (s[i] === ' ') {
            i++;
        } else if (s[i] === '+') {
            sign = stack[stack.length - 1];
            i++;
        } else if (s[i] === '-') {
            sign = -stack[satck.length - 1];
            i++;
        } else if (s[i] === '(') {
            stack.push(sign);
            i++;
        } else if (s[i] === ')') {
            stack.pop();
            i++
        } else {
            let num = 0;
            // 处理 123 这种格式
            while (i < n && !isNaN(Number(s[i])) && s[i] !== ' ') {
                num = num * 10 + (parseInt(s[i]));
                i++
            }
            result += sign * num;
        }
    }
    return result;
}
```

## 225. 用队列实现栈
 
 [225. 用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/)

 ```js
 var MyStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
 ```
 