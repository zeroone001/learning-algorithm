# Two Pointers（双指针）

## 11. 盛最多水的容器

[11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const len = height.length;
    let max= 0;
    for(let i=0, j=len-1; i<j;) {
        let minHeight = height[i] < height[j] ? height[i++] : height[j--];
        let area = (j-i+1) * minHeight;
        max= Math.max(max, area);
    }
    return max;
};
```

## 15. 三数之和

[15. 三数之和](https://leetcode-cn.com/problems/3sum/)

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const len = nums.length;
    let res = [];
    if(len < 3 || !nums) return [];
    nums.sort((a,b) => a-b);
    
    for (let i = 0; i<len; i++) {
        if (nums[i] > 0) break;
        if (i>0 && nums[i] === nums[i-1]) continue;

        let left = i+1;
        let right = len-1;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;

                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            }
        }
    }
    return res;
};
```


## 16. 最接近的三数之和

[16. 最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest/)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);

    let res = Infinity;
    const len = nums.length;
    // 以一个数为基点，循环遍历
    for(let i = 0; i < len; i++) {
        let [left, right] = [i+1, len-1];

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }
            if (sum < target) {
                left++;
            }
            if (sum > target) {
                right--;
            }
            if (sum === target) {
                return sum;
            }
        }
    }
    return res;
};
```

## 977. 有序数组的平方

[977. 有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* 
    指定两个指针，从前往后，从后往前
*/
var sortedSquares = function(nums) {
    const res = [];
    for(let i = 0, j = nums.length-1; i<=j;) {
        const left = Math.abs(nums[i]);
        const right = Math.abs(nums[j]);
        /* 谁更大，先把谁放到数组 */
        if (left < right) {
            res.unshift(right * right);
            j--;
        } else {
            res.unshift(left * left);
            i++;
        }
    }
    return res;
};
```

## 27. 移除元素

[27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};
```

## 125. 验证回文串

[125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome3 = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let i = 0,j = s.length - 1;
    while (i < j) {
        if(s[i] !== s[j]){
           return false;
        }
        i++;
        j--;
    }
    return true;
};
```

## 128. 最长连续序列

[128. 最长连续序列](https://leetcode-cn.com/problems/longest-consecutive-sequence/)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for(let val of set) {
        if (!set.has(val - 1)) {
            let count = 1;
            let cur = val;
            while (set.has(cur+1)) {
                count++;
                cur++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};
```

## 455. 分发饼干

[455. 分发饼干](https://leetcode-cn.com/problems/assign-cookies/)

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const numOfChildren = g.length, numOfCookies = s.length;
    let count = 0;
    for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
        while (j < numOfCookies && g[i] > s[j]) {
            j++;
        }
        if (j < numOfCookies) {
            count++;
        }
    }
    return count;
};
```

## 917. 仅仅反转字母

[917. 仅仅反转字母](https://leetcode-cn.com/problems/reverse-only-letters/)

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const n = s.length;
    const arr = [...s];
    let left = 0, right = n - 1;
    // 双指针，left和right
    while (true) {
        // 过滤非字母
        while (left < right && !(/^[a-zA-Z]+$/.test(s[left]))) { // 判断左边是否扫描到字母
            left++;
        }
        // 右侧过滤非字母
        while (right > left && !(/^[a-zA-Z]+$/.test(s[right]))) { // 判断右边是否扫描到字母
            right--;
        }
        // 左右指针相遇，结束循环
        if (left >= right) {
            break;
        }
        // 交换字母
        swap(arr, left, right);
        // 指针移动
        left++;
        right--;
    }
    return arr.join('');
};

const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
```

## 925. 长按键入

[925. 长按键入](https://leetcode-cn.com/problems/long-pressed-name/)

```js
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    const n = name.length, m = typed.length;
    let i = 0, j = 0;
    while (j < m) {
        if (i < n && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
    }
    return i === n;
};
```
## 986. 区间列表的交集

[986. 区间列表的交集](https://leetcode-cn.com/problems/interval-list-intersections/)

```js
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const res = [];
	let i = 0;
	let j = 0;
	while (i < firstList.length && j < secondList.length) {
        // 交集区间的左端，取它们的较大者
		const start = Math.max(firstList[i][0], secondList[j][0]); 
        // 交集区间的右端，取它们的较小者
		const end = Math.min(firstList[i][1], secondList[j][1]); 
        // 形成了交集区间
		if (start <= end) {      
			res.push([start, end]);
		}
        // 谁先结束，谁的指针就步进，考察下一个子区间
		if (firstList[i][1] < secondList[j][1]) {
			i++;
		} else {
			j++;
		}
	}
	return res;
};
```

## 167. 两数之和 II - 输入有序数组

[167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (true) {
        let sum = numbers[left] + numbers[right];

        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left+1, right+1];
        }
    }
};
```

