/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    s = s.split("");
    
    for(let i = 0; i < s.length; i++){
        if (!map.has(s[i])) {
            map.set(s[i], i);
        } else {
            map.set(s[i], -1);
        }
    }
    
    for (let char of s){
        if (map.get(char) >= 0) {
            return map.get(char)
        }
    }
    return -1;
};