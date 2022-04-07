const calculate = document.getElementById('button');

function getFactorialNumber (e){
  e.preventDefault();
  const numb = document.querySelector('#display').addEventListener('submit', getFactorialNumber);
  /* Number.isInteger(numb); */
  let factorial = 1;

  for (let i = numb; i > 0; i--){
    factorial *= i
  }

  if (numb < 0) {
    alert('Numero negativo nao e valido')
  }

  if (numb > 0) {
    document.querySelector('#result').value = factorial;
  }

  console.log(factorial)
  /* alert(arr) */
}

getFactorialNumber();