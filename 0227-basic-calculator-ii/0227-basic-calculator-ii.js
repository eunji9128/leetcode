/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let num = '';
    let sign = null;
    s = s.split("");
    
    for (let i = 0; i <= s.length; i++){
        let char = s[i];
        if (char === " ") continue;
        if (!isNaN(Number(char))){
            let cur = char;
            num = num + cur;
        } else if (isNaN(char)){
            num = Number(num);
            if (sign === null || sign === "+"){
                stack.push(num);
            } else if (sign === "-"){
                stack.push(-num);
            } else if (sign === "*"){
                stack.push(stack.pop()*num);
            } else {
                stack.push(parseInt(stack.pop()/num));
            }
            num = "";
            sign = char;
        }
    }
    
    return stack.reduce((sum, val) => {return sum + val}, 0)
};