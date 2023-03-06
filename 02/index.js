let fib = num => {
  let n1 = 0;
  let n2 = 1;
  let proxTermo;
  let arr = [0, 1];
  console.log(n1);
  console.log(n2);
  proxTermo = n1 + n2;

  while (proxTermo <= num) {
    console.log(proxTermo);
    n1 = n2;
    n2 = proxTermo;
    arr.push(proxTermo);
    proxTermo = n1 + n2;
  }
  // console.log(arr);
  arr.includes(num)
    ? console.log('Valor existe na sequencia!\n')
    : console.log('Valor nao existe na sequencia!\n');
};

fib(5);
fib(10);
