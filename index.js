// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i) {
  return function (num) { return i * num };
};

const fareDoubler = createFareMultiplier(2);


