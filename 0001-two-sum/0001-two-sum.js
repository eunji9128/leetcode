/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let copy = [...nums];
    
    copy.sort((a,b) => {return a - b});
    
    while(start < end) {
        if ( copy[start] + copy[end] == target ) {
            break;
        } else if ( copy[start] + copy[end] > target ) {
            end -= 1;
        } else {
            start += 1;
        }
    }
    
    return [nums.indexOf(copy[start]), nums.lastIndexOf(copy[end])];
};