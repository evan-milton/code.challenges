/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const diff = target - element
        const pair = nums.indexOf(diff)
        if (pair !== -1 && pair !== index) return [index, pair];
        
    }
};