/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    };
    
    const map = new Map();
    
    for (let char of s) {
        map.set(char, map.get(char) + 1 || 1);
    };
    
    for (let char of t) {
        if (!map.get(char)) return false;
        map.set(char, map.get(char) - 1);
    };
    
    return true
};