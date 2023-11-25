/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

var differenceOfSums = function(n, m) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m) sum += i;
        else sum -= i; 
    }
    return sum;
};