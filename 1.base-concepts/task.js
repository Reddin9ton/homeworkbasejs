"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = (b**2) - 4 * a * c;
  let rootOne = 0;
  let rootTwo = 0;

  if (discr < 0) {
    arr = [];
  }
  if (discr === 0) {
    rootOne = -b / (2 * a);
    arr = [rootOne];

  }

  if (discr > 0) {
    rootOne = (-b + Math.sqrt(discr) )/(2*a);
    rootTwo = (-b - Math.sqrt(discr) )/(2*a);
    arr = [rootOne, rootTwo];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / countMonths;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let sum = Number((payment * countMonths).toFixed (2));
  return sum;

}