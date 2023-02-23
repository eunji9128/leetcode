/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prevNode = head;
    let crntNode = (head === null ? null : head.next);
    
    // console.log(head);
    
    while (crntNode) {
        // console.log('try');
        if (prevNode.val === val) {
            head = head.next;
            prevNode = head;
            crntNode = head.next;
            continue;
            // console.log('head1: ', head);
        } else if (crntNode.val === val) {
            prevNode.next = crntNode.next;
            crntNode = crntNode.next;
            // console.log('head2: ', head);
            continue;
        }
        prevNode = prevNode.next;
        crntNode = crntNode.next;
    };
    
    if (head !== null && head.val === val) {
        head = null;
    }
    
    return head;
};