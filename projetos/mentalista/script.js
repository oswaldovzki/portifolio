
//variables
let dificuldade = 100;
let contador = 7;
let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log ('O número secreto é ' + numeroSecreto);


//HTML elements
document.getElementById('instructions').innerHTML = `Chute um número entre 1 e ${dificuldade}`;


// Game Code
let tentativas = 1;

function adivinharNumero() {
  let chute = document.getElementById('container__input').value;
  contador--;

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';  
    document.getElementById('results').innerHTML = `Isso Ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`;
  } else {
      if (chute > numeroSecreto) {
        document.getElementById('results').innerHTML = `O número secreto é menor que ${chute}. Chutes restantes: ${contador}`;
      } else {
        document.getElementById('results').innerHTML = `O número secreto é maior que ${chute}. Chutes restantes: ${contador}`;
      }
      tentativas++;
  }

  if (contador <= 0) {
    document.getElementById('results').innerHTML = `Poxa vida! Não foi dessa vez. O número secreto era ${numeroSecreto}. Atualize a página jogar novamente.`;
  }
}


//settings
function settingsMenu () {
  document.getElementById('settings__menu').classList.toggle('show')
}