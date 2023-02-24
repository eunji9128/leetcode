/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0, null);
    let crntNode = dummy;
    let node1 = list1;
    let node2 = list2;
    
    while (node1 || node2) {
        if (!node1) {
            crntNode.next = node2;
            node2 = node2.next;
        } else if (!node2) {
            crntNode.next = node1;
            node1 = node1.next;
        } else if (node1.val <= node2.val) {
            crntNode.next = node1;
            node1 = node1.next;
        } else {
            crntNode.next = node2;
            node2 = node2.next;
        }
        crntNode = crntNode.next;
    };
    
    return dummy.next;
    
};