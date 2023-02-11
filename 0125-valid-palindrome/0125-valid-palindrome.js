/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 65 <= AZ <= 90
    // 97 <= az <= 122
    // 48 <= 09 <= 57
    
    s = s.toLowerCase();
    
    let start = 0;
    let end = s.length - 1;
    
    while ( start < s.length ) {
        var text_s = s.charCodeAt(start);
        var text_e = s.charCodeAt(end);
        
        if ( text_s < 48 || (text_s > 57 && text_s < 97) || text_s > 122 ) {
            start++;
        } else if ( text_e < 48 || (text_e > 57 && text_e < 97) || text_e > 122 ) {
            end--;
        } else if ( text_s != text_e ) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
};