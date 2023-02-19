/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let patMap = new Map();
    let strMap = new Map();
    s = s.split(' ');
    
    if (pattern.length !== s.length) return false;
    
    for (let i = 0; i < pattern.length; i++){
        if (!patMap.has(pattern[i]) && !strMap.has(s[i])) {
            patMap.set(pattern[i], s[i]);
            strMap.set(s[i], pattern[i]);
        } else if (patMap.get(pattern[i]) !== s[i]) {
            return false;
        }
        
        if (pattern[i] !== strMap.get(patMap.get(pattern[i]))) {
            return false;
        }
    }
    return true;
};