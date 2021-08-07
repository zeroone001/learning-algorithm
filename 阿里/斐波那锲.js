// 实现一个斐波那锲函数


// for 普通for循环

//for循环+解构赋值

var fibonacci = function (n) {
    let n1 = 1; n2 = 1;
    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
}
fibonacci(30)

// 1 while迭代
function fib1 (count) {
    if (n <=1) {return 1;}
    let arr = [1,1];
    let n = count + 1 - 2;
    while (n) {
        let a = arr[arr.length - 1];
        let b = arr[arr.length - 2];
        arr.push(a+b);
        n--;
    }
    return arr[count.length - 1];
}

// 2 递归
function fib (count) {
    function fn (n, the = 1, next = 1) {
        if (n === 0) return the;
        return fn(n-1, next, the + next);
    }
    return fn(count);
}
fib(4)
// 3 普通递归
// 　　代码优美逻辑清晰。但是有重复计算的问题，如：当n为5的时候要计算fibonacci(4) + fibonacci(3)，当n为4的要计算fibonacci(3) + fibonacci(2) ，这时fibonacci(3)就是重复计算了。运行 fibonacci(50) 会出现浏览器假死现象，毕竟递归需要堆栈，数字过大内存不够

function fib (n) {
    console.log(n);
    if (n === 1 || n === 2)
    return 1;
    return fib(n - 1) + fib(n - 2);
}

fib(4)
