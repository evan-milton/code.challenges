const fs = require('fs');

const NUMBERS = ['one','two','three','four','five','six','seven','eight','nine'];
const EDGECASES = ['oneight', 'twone', 'threeight', 'fiveight', 'sevenine', 'eightwo', 'eighthree', 'nineight'];

// const regex = new RegExp('\d|' + `${EDGECASES.join('|')}|` + `${NUMBERS.join('|')}`, 'g');
const regex = /\d|oneight|twone|threeight|fiveight|sevenine|eightwo|eighthree|nineight|one|two|three|four|five|six|seven|eight|nine/g
// console.log(`regex: ${regex}`);


const firstAndLast = (originalStr) => {
    const digits = originalStr
    .match(regex)
    .map((str) => {
        const writtenIndex = NUMBERS.indexOf(str);
        return writtenIndex !== -1 ? writtenIndex + 1 : str; 
    })
    console.log(`digits: ${digits}`);

    // use first part of string as digit
    let first = digits[0];
    const FIRSTEDGE = EDGECASES.indexOf(first) !== -1;
    if (FIRSTEDGE) console.log(`FIRST EDGECASE: ${first}`);
    if (first === 'oneight') first = 1;
    if (first === 'twone') first = 2;
    if (first === 'threeight') first = 3;
    if (first === 'fiveight') first = 5;
    if (first === 'sevenine') first = 7;
    if (first === 'eightwo') first = 8;
    if (first === 'eighthree') first = 8;
    if (first === 'nineight') first = 9;
    if (FIRSTEDGE) console.log(`FIRST ${first}`);

    // use first part of string as digit
    let last = digits[digits.length - 1];
    const LASTEDGE = EDGECASES.indexOf(last) !== -1;
    if (LASTEDGE) console.log(`LAST EDGECASE: ${last}`);
    if (last === 'oneight') last = 8;
    if (last === 'twone') last = 1;
    if (last === 'threeight') last = 8;
    if (last === 'fiveight') last = 8;
    if (last === 'sevenine') last = 9;
    if (last === 'eightwo') last = 2;
    if (last === 'eighthree') last = 3;
    if (last === 'nineight') last = 8``;
    if (LASTEDGE) console.log(`LAST ${last}`);

    // console.log(`digits: ${digits} -- result: ${Number(first.toString() + last.toString())}`);
    return Number(`${first}` + `${last}`)
};

const allFileContents = fs.readFileSync('input.txt', 'utf-8');

const result = allFileContents.split(/\r?\n/)
.map(str => firstAndLast(str))
.reduce((sum, current) => {
    let result = sum + current
    // console.log(`current: ${current} -- sum: ${result}`);
    return result;
});
console.log(`sum: ${result}`);

