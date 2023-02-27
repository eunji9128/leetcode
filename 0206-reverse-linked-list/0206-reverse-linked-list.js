/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    
    var res = reverseList(head.next);

    head.next.next = head;
    head.next = null;
    
    return res;
    
//     let prev = head;
//     let crnt = (prev ? prev.next : null);
//     let next = (crnt ? crnt.next : null);
    
//     while (crnt) {
//         crnt.next = prev;
//         prev === head ? prev.next = null : null;
//         prev = crnt;
//         crnt = next;
//         next = (next ? next.next : next);
//     };

//     return prev;
    
};