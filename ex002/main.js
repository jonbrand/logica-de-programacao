/*  Escreva um programa que, ao iniciar gera um valor aleatorio de 1 a 10 e
    permite que o usuario chute um numero ate que o valor aleatorio gerado
    no inicio do programa seja chutado corretamente.

    O programa deve informar se o chute foi acima, abaixo ou igual ao valor
    aleatorio gerado no inicio do programa. 
    
    PASSOS:
    1 - [x] Criar interface do usuario;
    2 - [x] Formula que gera numeros aleatorios de 0 a 10;
    3 - [x] Armazenar numero aleatorio;
    4 - [] Pegar o chute do usuario;
    2 - Criar input do usuario para chutar o numero de 1 a 10;
    3 - Retorno do programa se o chute foi certo, acima ou abaixo do valor.
    */

const generatedNumber = parseInt(randomNumber(0, 10));

// gera um numero aleatorio
function randomNumber (min, max) {
  // Maior ou igual a X
  min = Math.ceil(min);
  // Menor numero referente a X
  max = Math.floor(max);

  return Math.random() * (max - min) - min;
}

const shot = document.getElementById('shot').value;

const result = document.getElementById('result').innerText;

function shotResult (shot, randomNumber) {
  if (shot < randomNumber) {
    result+= <strong>'Chute muito baixo, tente outra vez!'</strong>
  } else if (shot > randomNumber) {
    result.innerHTML+= <strong>'Chute muito alto, tente outra vez!'</strong>;
  } else {
    result.innerHTML+= <strong>'Correto!'</strong>
  };
};
    

    

    
