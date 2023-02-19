/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' ');
    
    const patternCheck = function(arr){
        let map = new Map();
        let id = 0;
        let res = '';
        
        for (let item of arr){
            if (!map.has(item)) {
                map.set(item, ++id);
            }
            res = res + map.get(item);
        }
        return res;
    };
    
    return patternCheck(pattern) === patternCheck(s);
    
};