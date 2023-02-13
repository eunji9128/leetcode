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
    
    // console.log(s)
    
    while ( end < s.length ) {
        // console.log(s[end]);
        if ( map.get(s[end]) === undefined ) {
            map.set(s[end], end);
            curr_length++;
            // console.log('1: ', start, end, curr_length, max_length);
            // console.log('1: ', map);
        } else {
            start = Math.max(map.get(s[end]) + 1, start);
            curr_length = end - start + 1;
            map.set(s[end], end);
            // console.log('2: ', start, end, curr_length, max_length);
            // console.log('2: ', map);
        }
        max_length = Math.max(curr_length, max_length);
        end++;
    }
    
    return max_length
};