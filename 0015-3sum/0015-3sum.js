/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let i = 0;
    let result = [];
    nums.sort((a,b)=>a-b);
    
    while ( i < nums.length - 2 ) {
        let start = i + 1;
        let end = nums.length - 1;
        
        if ( nums[i] > 0 ) {break}
        
        while ( start < end ) {
            if ( nums[i] + nums[start] + nums[end] === 0 ) {
                result.push([nums[i], nums[start], nums[end]]);

                while ( nums[start] == nums[start + 1] ) {
                    start++
                };
                while ( nums[end] == nums[end - 1] ) {
                    end--
                };
                start++;
                end--;
            } else if ( nums[i] + nums[start] + nums[end] > 0 ) {
                end--;
            } else {
                start++;
            }
            
        }
        
        while ( i < nums.length - 3 && nums[i] === nums[i + 1]) {i++};
        i++;
    }
    
    return result;
};