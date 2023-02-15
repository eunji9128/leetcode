/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pivot = nums.length - 1;
    let left = 0;
    let right = pivot - 1;
    
    if (nums.length === 1) return nums[0];
    
    while (left <= right) {
        if (nums[left] <= nums[pivot]) {
            left++;
        } else if (nums[right] > nums[pivot]) {
            right--;
        } else {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    };
    
    [nums[left], nums[pivot]] = [nums[pivot], nums[left]];
    
    if (left === (nums.length - k)) {
        return nums[left];
    } else if (left < (nums.length - k)) {
        return findKthLargest(nums.slice(left + 1, nums.length), k);
    } else { 
        return findKthLargest(nums.slice(0,left), k - (nums.length - left)) 
    };
    
};