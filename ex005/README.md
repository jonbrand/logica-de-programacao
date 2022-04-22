# Medidor de Velocidade
## Levando em consideração a velocidade máxima permitida de 80km em uma determinada rua. Crie um programa que recebe do usuário um valor que representa a velocidade e com base nessa velocidade diga se ele tomou um multa leve, grave ou gravíssima. Levando em consideração que se a pessoa estiver abaixo da velocidade máxima seu programa deve exibir "não houve multa", caso esteja até 10km acima, deve exibir: "levou multa leve", caso esteja entre 11 a 20km acima da velocidade máxima, exibir: "levou multa grave", e caso esteja acima de 20km acima da velocidade máxima, exiba: "levou multa gravíssima".

### 1. Quais dados de entrada são necessários?
R: Input do usuario com um a velocidade;
### 2. O que devo fazer com esses dados?
R: Validar e imprimir o resultado se houve multa gravissima, grave
ou leve;
### 3. Quais são as restrições deste problema?
R: O número deve ser positivo e inteiro;
### 4. Qual é o resultado esperado?
R: A resposta se houve multa ou não;
### 5. Qual a sequência de passos a serem dados para alcançar o resultado esperado?
R:

input = 'escreva a sua velocidade';
var speed = input;
var limitSpeed = 80;

if(speed < limitSpeed){
  'não houve multa'
} else if (speed += limitSpeed /2 => 80,5){
  'levou multa leve'
} else if (speed += limitSpeed /2 => 85,5){
  'levou multa grave'
} else {
  'levou multa gravíssima'
}


