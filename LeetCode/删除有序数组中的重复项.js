/* 
leetcode: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-tudo/

删除有序数组中的重复项

双指针
*/

const removeDup = function (nums) {
    const n = nums.length;

    if (n === 0) {
        return 0;
    }
    let fast = 1;
    let slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    console.log(nums);
    return slow;

}