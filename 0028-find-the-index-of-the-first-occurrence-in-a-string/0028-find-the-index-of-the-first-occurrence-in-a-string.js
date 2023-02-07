/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const match = getPartialMatch(needle);
    let idx = 0;
    let sub_idx = 0;
    console.log(match);
    
    while ( idx < haystack.length ) {
        if ( haystack[idx] != needle[sub_idx] ) {
            if ( sub_idx != 0 ) {
                sub_idx = match[sub_idx - 1];
                console.log('match idx: ', sub_idx);
            } else {
                idx += 1;
            }
        } else {
            if ( sub_idx === needle.length - 1 ) {
                return idx - sub_idx;
            }
            idx += 1;
            sub_idx += 1;
            console.log('idx, sub: ', idx, sub_idx);
        }
        console.log('try idx: ', idx);
        
    }
    return -1;
};

function getPartialMatch(N) {
    const pi = new Array(N.length).fill(0);
    for(let begin = 1; begin < N.length; begin++) {
        for(let i = 0; i + begin < N.length; i++) {
            if(N[begin + i] != N[i]) break;
            pi[begin + i] = Math.max(pi[begin + i], i + 1);
        }
    }
    return pi;
}