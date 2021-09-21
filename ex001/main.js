/*  Escreva um programa que retorne o valor hora de um funcionario com
    base no seu salario mensal e horas trabalhadas por mes */

function hourWorkedPerMounth () {
  const monthlySalary = Number(document.getElementById('salary').value);

  const workedHours = Number(document.getElementById('hours').value);

  const dailyPayment = Number(monthlySalary / workedHours);

  console.log(dailyPayment);

  (document.getElementById('result').setAttribute('value', dailyPayment));

  console.log(document.getElementById('salary').value);
}

