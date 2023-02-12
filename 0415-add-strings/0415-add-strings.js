/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let carry = 0;
    let sum = '';
    
    for ( var i = 0; i < Math.max(len1, len2); i++ ) {
        var int1 = parseInt(num1[len1 - 1 - i]);
        var int2 = parseInt(num2[len2 - 1 - i]);
        
        isNaN(int1) ? int1 = 0 : null;
        isNaN(int2) ? int2 = 0 : null;
        
        sum = String((carry + int1 + int2) % 10) + sum;
        carry = parseInt(( carry + int1 + int2 ) / 10);
    }
    
    if ( carry != 0) {
        sum = '1' + sum;
    }
    
    return sum;
};