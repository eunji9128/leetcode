/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
    let sum = 0;
    let maxLen = 0;
    
    map.set(0, [-1]);
    
    for (let i = 0; i < nums.length; i++){
        sum += nums[i] === 0 ? -1 : 1;
        
        if (map.get(sum)){
            maxLen = Math.max(maxLen, i - map.get(sum)[0]);
            let max = map.get(sum);
            max[1] = i;
            map.set(sum, max);
        } else {
            map.set(sum, [i]);
        }
    };
    
    return maxLen;
};