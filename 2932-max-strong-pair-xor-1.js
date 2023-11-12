/**
 * @param {number[]} nums
 * @return {number}
 */
// idea - compare each item in array to itself and each follow item, check if pair is strong, and track highest XOR as you go
const maximumStrongPairXor = function(nums) {
   return nums.reduce((xorMax, firstNum, index) => {
        const remainingArray = nums.slice(index); // combinations not permutations, save time by not comparing the same pairs twice 
        remainingArray.forEach(secondNum => {
            const isPair = Math.abs(firstNum - secondNum) <= Math.min(firstNum, secondNum);        
            if (!isPair) return;

            const xor = firstNum ^ secondNum;
            if (xor > xorMax) xorMax = xor;
        })
        return xorMax
    }, 0)
};