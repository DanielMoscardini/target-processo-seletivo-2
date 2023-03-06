let faturamento = [30, 10, 25, 65];

let maior = arr => {
  let max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return max;
};
let max = maior(faturamento);

let menor = arr => {
  let min = arr.reduce(function (a, b) {
    return Math.min(a, b);
  });
  return min;
};
let min = menor(faturamento);

let media = arr => {
  let sum = arr.reduce((a, b) => a + b);
  let avg = sum / arr.length;
  return avg;
};
let avg = media(faturamento);

console.log(max);
console.log(min);
console.log(avg);
