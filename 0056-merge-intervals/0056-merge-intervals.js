/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(function(a,b) { return a[0] - b[0] });
    
    var start = intervals[0][0];
    var end = intervals[0][1];
    var result = [];
    var tmp = [];
    
    for ( var i = 0; i < intervals.length; i++) {
        if ( end >= intervals[i][0] ) {
            start = Math.min(start, intervals[i][0]);
            end = Math.max(end, intervals[i][1]);
            tmp = [start, end];
        } else if ( end < intervals[i][0] ) {            
            start = intervals[i][0];
            end = intervals[i][1];
            result.push(tmp);
            tmp = [start, end];
        }
    }
    
    result.push(tmp);
    return result;
};