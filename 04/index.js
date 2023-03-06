let all = {
  sp: 67836.43,
  rj: 36678.66,
  mg: 29229.88,
  es: 27165.48,
  outros: 19849.53
};

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
sum = sumValues(all);
console.log(sum);

let percent = {
  sp: (67836.43 / sum) * 100,
  rj: (36678.66 / sum) * 100,
  mg: (29229.88 / sum) * 100,
  es: (27165.48 / sum) * 100,
  outros: (19849.53 / sum) * 100
};

console.log(percent);
