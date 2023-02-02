/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let arr = Array(nums.length + 1).fill(0);
    
    for ( var i = 0; i < nums.length; i++ ) {
        arr[nums[i]] += 1;
        console.log(nums[i], arr[nums[i]]);
        if (arr[nums[i]] > 1) {
            return nums[i];
        }
    }
    
};