const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  members.forEach(function (participant) {
    if (typeof participant === 'string') {
      participant = participant.trim();
      result.push(participant[0].toUpperCase());
    }
  });
  return result.sort().join('');
};
