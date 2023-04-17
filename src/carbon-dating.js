const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// const NATURAL_LOGARITM_OF_TWO = 0.693123981710992;
// const NATURAL_LOGARITM_OF_TWO = 0.69300133170871;
const NATURAL_LOGARITM_OF_TWO = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') {
    return false
  }

  sampleActivity = Number(sampleActivity);

  if (sampleActivity <= 0 || sampleActivity >= 15) {
    return false
  }

  if (isNaN(sampleActivity)) {
    return false
  }

  let res = Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / NATURAL_LOGARITM_OF_TWO;

  return Math.ceil(res)
}

module.exports = {
  dateSample
};
