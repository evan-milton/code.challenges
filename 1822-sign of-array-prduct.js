/**
 * @param {number[]} nums
 * @return {number}
 */

// iterate and track even/odd
var arraySign = function(nums) {
    let numNegatives = 0;
    for (const num of nums) {
        if (num === 0) return 0
        if (Math.sign(num) === - 1) numNegatives += 1;
    }

    return numNegatives % 2 === 0 ? 1 : -1 
};

// filtering
var arraySign = function(nums) {
    if (nums.indexOf(0) !== -1) return 0;

    const numNegatives = nums.filter((num) => Math.sign(num) === -1).length;
    return numNegatives % 2 === 0 ? 1 : -1 
};

// reduce product -- this solution can overflow on arrays with large products
var arraySign = function(nums) {
    const product = nums.reduce((product, currentNum) => product * currentNum);
    if (product === 0) return 0;
    return Math.sign(product);
};

// reduce, no Math.sign
function arraySign(nums) {
    const product = nums.reduce((product, current) => product * current);
    return product === 0 ? 0 
    : product > 0 ? 1 
    : -1
  }