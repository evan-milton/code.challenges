// idea - loop thru array and add k elements from current index together, save longest character count as you go

function longestConsec(strarr, k) {
    if (k > strarr.length || k < 0) return '';

    return strarr.reduce((longest, _, index, array) => {
        const concat = array.slice(index, index + k).join('');
        console.log('concat', concat)
        return concat.length > longest.length ? concat : longest;  
    }, '');
}