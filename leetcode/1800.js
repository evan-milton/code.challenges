/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let totalSum = 0, currentSum = 0, lastNum = 0;
    for (let num of nums) {
        currentSum = (num > lastNum) ? currentSum += num : num; 
        if (currentSum > totalSum) totalSum = currentSum;
        lastNum = num;
    }

    return totalSum
};