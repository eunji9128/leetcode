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
        var int1 = parseInt(num1[len1 - 1 - i] || 0);
        var int2 = parseInt(num2[len2 - 1 - i] || 0);
        
        sum = String((carry + int1 + int2) % 10) + sum;
        carry = (carry + int1 + int2) > 9 ? 1 : 0;
    }
    
    if ( carry != 0) {
        sum = '1' + sum;
    }
    
    return sum;
};