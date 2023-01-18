/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    
    if (nums.length == 1) {
        return 0;
    }
    
    while ( left != right ) {
        var pivot = parseInt((left + right)/2);
        if ( nums[pivot] < nums[pivot + 1] ) {
            left = pivot + 1;
        } else {
            right = pivot;
        }
    }
    return left;
    
};