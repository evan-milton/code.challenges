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
 */
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

