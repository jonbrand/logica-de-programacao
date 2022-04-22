let form = document.getElementById('display');
let inputSpeed = document.getElementById('number');

form.addEventListener('submit', function(e){
  e.preventDefault();
  let speed = Number(number.value);
  let limitSpeed = 80;

  if (speed < 0) {
    alert('Número negativo não e válido')
  } else {
    if (speed <= limitSpeed){
      document.querySelector('#result').value = `${'Velocidade de '+ speed + ', não houve multa'}`;
    } else if (speed > limitSpeed && speed <= limitSpeed + 10) {
      document.querySelector('#result').value = `${'Velocidade de '+ speed + ', levou multa leve'}`;
    } else if (speed > limitSpeed && speed >= limitSpeed + 11 && speed <= limitSpeed + 20) {
      document.querySelector('#result').value = `${'Velocidade de '+ speed + ', levou multa grave'}`;
    } else {
      document.querySelector('#result').value = `${'Velocidade de '+ speed + ', levou multa gravíssima'}`;
    }
  }

 
});