/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    let count = 0;
    
    while (nodeA !== nodeB) {
        if (count > 2) {
            return false;
        }
        if (nodeA && nodeB) {
            nodeA = nodeA.next;
            nodeB = nodeB.next;
        } else {
            nodeA = (nodeA || headB);
            nodeB = (nodeB || headA);
            count++;
        }
    }
    return nodeA;
};