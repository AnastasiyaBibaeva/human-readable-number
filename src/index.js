module.exports = function toReadable (number) {
const numWords = require('num-words');
const amountInWords = numWords(number);
let result = amountInWords.toString().replace('and ', '');
return result;
}
