/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let order = ''
    while (head != null) {
        order += head.val
        head = head.next
    }
    let reverse = order.split('').reverse().join('')
    
    return order == reverse
};