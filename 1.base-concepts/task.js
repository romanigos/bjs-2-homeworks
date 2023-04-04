"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  }
  if (d === 0) {
    arr.push((b * -1) / (2 * a));
  }

  if (d > 0) {
    arr.push(((b * -1) + Math.sqrt(d)) / (2 * a));
    arr.push(((b * -1) - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P = (percent / 12) / 100;
  let n = countMonths;
  var payPerMonth = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = payPerMonth * n;
  totalAmount = Number(totalAmount.toFixed(2));

  if (isNaN(Number(percent))) {
    totalAmount = "false";
    return totalAmount;
  }
  if (isNaN(Number(contribution))) {
    return totalAmount = "false";
  }
  if (isNaN(Number(amount))) {
    return totalAmount = "false";
  }

  return totalAmount;
}