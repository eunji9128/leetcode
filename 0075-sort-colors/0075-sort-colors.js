/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var left_idx = 0;
    var right_idx = nums.length - 1;
    var idx = 0;

    while (idx <= right_idx) {
        if ( nums[idx] == 0 ) {
            [nums[idx], nums[left_idx]] = [nums[left_idx], nums[idx]];
            left_idx++;
            idx++;
        } else if ( nums[idx] == 2 ) {
            [nums[idx], nums[right_idx]] = [nums[right_idx], nums[idx]];
            right_idx--;
        } else {
            idx++;
        }
    }
};