const fs = require('fs');

const firstAndLast = (str) => {
    const regexp = /(\d+)/g;
    const digits = str.match(regexp);

    let first = digits[0].toString()[0];
    let last = digits[digits.length - 1] % 10;

    return Number(`${first}` + `${last}`)
};

const allFileContents = fs.readFileSync('input.txt', 'utf-8');

const total = allFileContents.split(/\r?\n/)
.map(str => firstAndLast(str))
.reduce((sum, current) => sum + current);
console.log(`total: ${total}`);
