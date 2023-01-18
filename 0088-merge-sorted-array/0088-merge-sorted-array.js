/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var idx1 = m - 1;
    var idx2 = n - 1;
    var insert_idx = m + n - 1;
    
    if ( idx2 < 0 ) {
        return;
    }
    
    while (idx1 >= 0 && idx2 >= 0) {
        if ( nums1[idx1] >= nums2[idx2] ) {
            nums1[insert_idx] = nums1[idx1];
            insert_idx--;
            idx1--;
        } else {
            nums1[insert_idx] = nums2[idx2];
            insert_idx--;
            idx2--;
        }
    }
    
    while ( idx2 >= 0 ) {
        nums1[insert_idx] = nums2[idx2];
        insert_idx--;
        idx2--;
    }
};