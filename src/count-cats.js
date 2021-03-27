const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let countCats = 0;
  for (j = 0; j < matrix.length; j++) {
    for (k = 0; k < matrix[j].length; k++) {
      if (matrix[j][k] === '^^') countCats++;
    }
  }
  return countCats;
};