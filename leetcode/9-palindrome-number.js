/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (Math.sign(x) < 0) return false
    const ints = x.toString().split('').reverse().join('')
    return ints == x
};