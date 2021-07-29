/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-08-13 13:29:44
*/
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    let arr = [];
    for (let i = 0; i < num1.length; i++) {
        let str1 = +num1[num1.length - 1 - i];
        for (let j = 0; j < num2.length; j++) {
            let str2 = +num2[num2.length - 1 - j];
            let n = arr[i + j] ? arr[i+j] + (str1 * str2) : str1*str2; 
            arr[i+j] = n % 10;

            if (n > 9) {
                arr[i + j + 1] = arr[i + j + 1] ? arr[i+j+1] + (Math.floor(n / 10)) : Math.floor(n / 10); 
            } 
        }
    }
    return arr.reverse().join('');
};