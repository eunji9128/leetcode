/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum = 0;
    let dummy = new ListNode(0, null);
    let current = dummy;
    
    while (l1 || l2) {
        let a = (l1 ? l1.val : 0);
        let b = (l2 ? l2.val : 0);
        
        sum = (carry ? a + b + 1 : a + b);
        carry = (sum < 10 ? 0 : 1);
        l1 = (l1 ? l1.next : null);
        l2 = (l2 ? l2.next : null);
        
        current.next = new ListNode(sum%10, null);
        current = current.next;  
    };
    
    if (carry) {
        current.next = new ListNode(1, null);
    }
    
    return dummy.next;
    
    
    
};