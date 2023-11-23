/**
 * @param {number[]} nums
 * @return {number[][]}
 */
    // two pointer
    //      i        j
    // [-4,-1,-1,0,1,2]
    // 1 is too small, increase i until it reaches j, no match
    
    //      i     j
    // [-1,-1,0,1,2]
    // 1 YAY -> record triplet

    // one full loop O(n)
    // within each in O(n)
    // O(n^2)           

// const threeSum = function(nums) {
//     nums = nums.sort((a, b) => a - b);
//     // console.log(`nums sorted: ${nums}`);

//     const triplets = {};

//     for (let index = 0; index < nums.length - 1; index++) {
//         const target = nums[index];
        
//         let i = index + 1, j = nums.length - 1;
//         while (i !== j) {
//             let iNum = nums[i], jNum = nums[j];
//             const sum = iNum + jNum;
//             // console.log(`target ${target} -- iNum: ${iNum} -- jnum: ${jNum}`);

//             if (sum === -1 * target) {
                
//                 let triplet = [nums[i], nums[j], target].sort((a, b) => a - b);
//                 // console.log(`triplet found: ${triplet}`);
//                 triplets[JSON.stringify(triplet)] = triplet;
//                 i += 1;
//             }
//             else if (sum < -1 *target) i += 1;
//             else j -= 1;
//         }
//     }

//     return Object.values(triplets);
// };


// [-1,0,1,2,-1,-4]
    /* {
        -5: [-4,-1]
        -2: [-1,-1],
        -4: [-4,0],
        -1: [-1,0],
    } */ 

// 0 = i + j + k
// -k = i + j
// target = i + j


// const threeSum = function(nums) {
//     const triplets = {};

//     // build up map with 
//     // key: each possible sum of two values in nums 
//     // value: array of deduped combinations making that sum
//     const hash = nums.reduce((hash, current, i, array) => {
//         for (let j = i + 1; j < array.length; j++) {
//             const element = array[j];
//             const sum = element + current;

//             if (!hash[sum]) hash[sum] = [];
//             hash[sum].push([element, current]);
//         }

//         return hash;
//     }, {})
//     console.log(`hashmap[-4]: ${hash[-4]}`);
//     console.log(`hashmap[2]: ${hash[2]}`);
//     console.log(`hashmap[-2]: ${hash[-2]}`);

//     for (let index = 0; index < nums.length; index++) {
//         const target = nums[index];
//         const complement = -1 * target;

//         const pairs = hash[complement];
//         console.log(`target: ${target} -- complement: ${complement}`);
//         if (pairs) pairs.forEach(pair => {
//             console.log(`pair: ${pair}`);
//             const sorted = [...pair, target].sort((a, b) => a - b);
//             console.log(`sorted triplet: ${sorted}`);

//             triplets[JSON.stringify(sorted)] = sorted;
//         }); 
//     }

//     return Object.values(triplets);
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target, index = 0) {
    const pairs = []
    for (index; index < nums.length; index++) {
        const element = nums[index];
        const diff = target - element
        const diffIndex = nums.indexOf(diff)

        const pair = [index, diffIndex]
        if (diffIndex !== -1 && diffIndex !== index) pairs.push(pair);
    }
    return pairs;
};

const threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const triplets = nums.reduce((triplets, currentNum, i, array) => {
        if (triplets[currentNum]) return triplets;
        else triplets[currentNum] = [];

        const pairs = twoSum(array, -1 * currentNum, i + 1);
        pairs.forEach((pair) => {
            let [j, k] = pair;
            const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
            if (i !== j && i !== k) triplets[currentNum].push(triplet);
        })

        return triplets;
    }, {})

    return Object.values(triplets).flat();
}
