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
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            crntNode.next = list1;
            list1 = list1.next;
        } else {
            crntNode.next = list2;
            list2 = list2.next;
        }
        crntNode = crntNode.next;
    };
    
    crntNode.next = (list1 || list2);
    return dummy.next;
    
};