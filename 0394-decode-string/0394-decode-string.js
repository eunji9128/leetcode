/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let str = "";
    let num = "";
    let cur = "";
    
    for (let char of s){
        if (char !== "]"){
            stack.push(char);
            continue;
        }
        
        cur = stack.pop();
        str = "";
        while (cur !== "["){
            str = cur + str;
            cur = stack.pop();
        }
        
        cur = stack.pop();
        num = "";
        while (!isNaN(Number(cur))){
            num = cur + num;
            cur = stack.pop();
        }
        
        stack.push(cur);
        stack.push(str.repeat(num));
    }
    
    return stack.join("")
};
