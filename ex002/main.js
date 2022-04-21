let form = document.getElementById('display');
let inputShot = document.getElementById('shot');
let min = 0;
let max = 10;
let generatedNumber = randomNumber(min, max);

// gera um numero aleatorio
function randomNumber () {
  // Maior ou igual a X
  min = Math.ceil(min);
  // Menor numero referente a X
  max = Math.floor(max);

  let result =  parseInt(Math.random() * (max - min) - min);

  return result;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  let shot = Number(inputShot.value);
  
  if (shot < min) {
    console.log(min)
    alert('Número negativo não e válido')
  } else if (shot > max) {
    alert('Número invalido')
  } else {
    if (shot < generatedNumber){
      document.querySelector('#result').value = `${'O número '+ shot + ' é muito baixo!'}`;
    } else if (shot > generatedNumber) {
      document.querySelector('#result').value = `${'O número '+ shot + ' é muito alto!'}`;
    } else {
      document.querySelector('#result').value = `${'É o Número '+ shot + ', acertou!'}`;
    }
  }
})