/**
 * @param {number[]} nums
 * @return {number[]}
 */

var separateDigits = function(nums) {
    return nums.flatMap(num => Number(num.toString().split('')));
};