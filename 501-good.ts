/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 * 
 *  Inorder-Tree-Walk(x)
   if x ≠ NIL then
     Inorder-Tree-Walk(x.left)
     visit node
     Inorder-Tree-Walk(x.right)
   end if
 */

   

function traverse(node, tracker = { current: null, currentCount: 0, highestCount: 0, modes: [] }): any {
    if (!node) return tracker
    let { current, currentCount, highestCount, modes } = traverse(node.left, tracker)
    const { val } = node

    if (val === current) currentCount += 1
    else {
        current = val
        currentCount = 1
    }
    
    if (currentCount === highestCount) modes.push(val)
    else if (currentCount > highestCount) {
        highestCount = currentCount
        modes = [val]
    }
   
    return traverse(node.right, { current, currentCount, highestCount, modes })
}

function findMode(root: TreeNode | null): number[] {
    if (!root) return []
    return traverse(root).modes
};






