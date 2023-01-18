/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var pivot = parseInt((left + right)/2);
    var pivot_next = pivot + 1;
    
    if (nums.length == 1) {
        return 0;
    }
    
    while ( left != right ) {
        if ( nums[pivot] < nums[pivot_next] ) {
            left = pivot_next;
            pivot = parseInt((left + right)/2);
            pivot_next = pivot + 1;
        } else {
            right = pivot;
            pivot = parseInt((left + right)/2);
            pivot_next = pivot + 1;
        }
    }
    return left;
    
};