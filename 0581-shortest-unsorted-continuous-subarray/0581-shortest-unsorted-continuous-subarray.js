/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let top_peak = nums[0];
    let btm_peak = nums[nums.length - 1];
    let start = nums.length - 1;
    let end = 0;
    
    for ( var i = 0; i < nums.length; i++ ) {
        if (nums[i - 1] <= nums[i] && nums[i + 1] < nums[i]) {
            top_peak = Math.max(top_peak, nums[i]);
        } else if ( nums[i - 1] > nums[i] && nums[i + 1] >= nums[i] ) {
            btm_peak = Math.min(btm_peak, nums[i]);
        }
    }
    
    // for ( var i = nums.length - 1; i >= 0; i-- ) {
    //     if ( nums[i - 1] > nums[i] && nums[i + 1] > nums[i] ) {
    //         btm_peak = Math.min(btm_peak, nums[i]);
    //     }
    // }
    
    console.log('tp, bp: ', top_peak, btm_peak);
    
    for ( var i = 0; i < nums.length; i++ ) {
        if ( top_peak > nums[i] ) {
            end = Math.max(end, i);
        }
    }
    
    for ( var i = nums.length - 1; i >= 0; i-- ) {
        if ( btm_peak < nums[i] ) {
            start = Math.min(start, i);
        }
    }
    
    console.log('start, end: ', start, end);
    
    if ( start >= end || top_peak == btm_peak ) {
        return 0;
    }
    
    return end - start + 1;
};