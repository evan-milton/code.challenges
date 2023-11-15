/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function(nums) {
    return nums.map((num, _, array) => array.filter((value) => value < num).length);
};