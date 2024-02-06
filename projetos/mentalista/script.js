//variables
var dificuldade = 10;
var contador = 7;
var tentativas = 1;
var numeroSecreto = geraNumeroSecreto();
console.log('O número secreto é ' + numeroSecreto);

//HTML elements
instructions(`Chute um número entre 1 e ${dificuldade}`);

// Game Code
function adivinharNumero() {
  let chute = document.getElementById('container__input').value;
  contador--;

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    printResult(`Isso Ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`);
    document.getElementById('reset').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      printResult(`O número secreto é menor que ${chute}. Chutes restantes: ${contador}`);
    } else {
      printResult(`O número secreto é maior que ${chute}. Chutes restantes: ${contador}`);
    }
    tentativas++;
    limparCampo();
  }

  if (contador <= 0) {
    printResult(`Poxa vida! Não foi dessa vez. O número secreto era ${numeroSecreto}. Atualize a página jogar novamente.`);
  }
}


// Functions
function printResult(textResult) {
  document.getElementById('results').innerHTML = textResult;
}

function instructions(instructions) {
  document.getElementById('instructions').innerHTML = instructions;
}

function geraNumeroSecreto() {
  return parseInt(Math.random() * dificuldade + 1);
}

function resetGame() {
  numeroSecreto = geraNumeroSecreto();
  document.getElementById('reset').setAttribute('disabled', true);
  console.log('O novo número secreto é ' + numeroSecreto);
  printResult('');
  limparCampo();
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

//settings
function settingsMenu() {
  document.getElementById('settings__menu').classList.toggle('show');
  document.body.addEventListener('click', function (event) {
    if (!event.target.closest('#settings__menu') && !event.target.closest('#settings')) {
      document.getElementById('settings__menu').classList.remove('show');
    }
  });
}

function difficultyChoice(choice) {
  dificuldade = choice;
  console.log(dificuldade);
  resetGame();
  instructions(`Chute um número entre 1 e ${dificuldade}`);
}