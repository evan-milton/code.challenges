/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.reduce((array, word) => {
        const splits = word.split(separator).filter(string => string);
        return [...array, ...splits];
    }, [])
};