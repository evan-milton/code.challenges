/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let numPairs = 0;

    const obj = 
        nums.reduce((obj, current, index) => {
            if (!obj[current]) obj[current] = [];
            obj[current].push(index);
            return obj;
        }, {})

    Object.values(obj).forEach(indices => {
        for (let i = 0; i < indices.length; i++) {
            for (let j = i + 1; j < indices.length; j++) {
                if ((indices[i] * indices[j]) % k === 0) numPairs += 1
            }
        } 
    });

    return numPairs;
};