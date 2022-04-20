let form = document.getElementById('display');
let inputValue = document.getElementById('number');
console.log(form)
console.log(inputValue)

form.addEventListener('submit', function(e){
  e.preventDefault();
  let numb = Number(number.value);
  let factorial = 1;

  for (let i = numb; i > 0; i--) {
    factorial *= i
  }

  if (numb < 0) {
    alert('Número negativo não e válido')
  }

  if(numb > 0) {
    document.querySelector('#result').value = factorial;
  }

  console.log(factorial)
});