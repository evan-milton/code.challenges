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

   
// recursive
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

// iterative
function findMode(root: TreeNode | null): number[] {
  const map: Record<number, number> = countModes(root)

  const keys = Object.keys(map)
  const values: number[] = Object.values(map)
  const max = Math.max(...values)
  
  const modes = [];
  let index = values.indexOf(max)
  while (index > -1) {
      modes.push(keys[index])
      values[index] = -100001
      index = values.indexOf(max)
  }
  
  return modes
};

const countModes = function(node, map = {}) {   
  const {val, right, left} = node
  
  map[val] = (map[val] + 1) || 1
  if (left) countModes(left, map)
  if (right) countModes(right, map)
  return map
}





