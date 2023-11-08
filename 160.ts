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
    const originalHeadB = headB
  
      while (headA) {
          while (headB) {
              if (headA === headB) return headA
              headB = headB.next
          }
          headA = headA.next
          headB = originalHeadB
      }
      return null
  };