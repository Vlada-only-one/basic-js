const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new error('Error');
  let month = date.getUTCMonth();
  if (month === 0 || month === 1 || month === 11) return 'winter';
  else if (month >= 2 && month <= 4) return 'spring';
  else if (month >= 5 && month <= 7) return 'summer';
  else return 'fall';
};