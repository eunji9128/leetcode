/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let max_length = 0;
    let curr_length = 0;
    
    let map = new Map();
    
    while ( end < s.length ) {
        if ( map.get(s[end]) === undefined ) {
            map.set(s[end], end);
            curr_length++;
        } else {
            start = Math.max(map.get(s[end]) + 1, start);
            curr_length = end - start + 1;
            map.set(s[end], end);
        }
        max_length = Math.max(curr_length, max_length);
        end++;
    }
    
    return max_length
};