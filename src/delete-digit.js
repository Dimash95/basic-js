const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n))
  let del = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {

    let del = arr.splice(i, 1)

    if (max < arr.join('')) {
      max = arr.join('')
    }

    arr.splice(i, 0, del)
  }
  return Number(max)
}

module.exports = {
  deleteDigit
};
