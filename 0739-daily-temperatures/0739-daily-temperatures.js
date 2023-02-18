/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
//     let stack = [];
//     let num = -Infinity;
//     let t = temperatures;
//     let answer = new Array(t.length).fill(0);
    
//     for (let i = t.length - 1; i >= 0; i--){
//         num = t[i];
        
//         if(stack.length === 0){
//             stack.push({
//                 value: num,
//                 idx: i
//             });
//             continue;
//         }
        
//         let top = stack[stack.length - 1].value;
//         let topIdx = stack[stack.length - 1].idx;
//         if (num < top){
//             answer[i] = topIdx - i;
//             stack.push({
//                 value: num,
//                 idx: i
//             });
//         } else if (num >= top){
//             while(num >= top){
//                 stack.pop();
//                 if (stack.length === 0){
//                    topIdx = i;
//                    break;
//                 }
//                 top = stack[stack.length - 1].value;
//                 topIdx = stack[stack.length - 1].idx;
//             }
//             answer[i] = topIdx - i;
//             stack.push({
//                 value: num,
//                 idx: i
//             });
//         }
//     }

//     return answer;
    
    let stack = [];
    let answer = new Array(temperatures.length).fill(0);
    let len = temperatures.length;
    
    for (let i = len - 1; i >= 0; i--){
        while(stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]){
            stack.pop();
        }
        answer[i] = stack[stack.length - 1] - i || 0;
        stack.push(i);
    }
    
    return answer;
};