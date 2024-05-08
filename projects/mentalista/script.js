//variables
var difficulty = 10;
var guessesCountdown = 4;
var guesses = 1;
var secretNumber = setSecretNumber();
console.log('O número secreto é ' + secretNumber);

//HTML elements
instructions(`Chute um número entre 1 e ${difficulty}`);

// Game Start
document.getElementById('container__input').addEventListener('input', function() {
  const inputValue = this.value.trim();
  const guessButton = document.getElementById('guess');
  if (inputValue === '') {
      guessButton.setAttribute('disabled', 'disabled');
  } else {
      guessButton.removeAttribute('disabled');
  }
});

document.getElementById('guess').addEventListener('click', handleGuessButtonClick);


// Game Code
function adivinharNumero() {
  let chute = document.getElementById('container__input').value;
  guessesCountdown--;

  if (chute == secretNumber) {
    let palavraTentativa = guesses > 1 ? 'tentativas' : 'tentativa';
    printResult(`Isso Ai! Você descobriu o número secreto (${secretNumber}) com ${guesses} ${palavraTentativa}!`);
    document.getElementById('reset').removeAttribute('disabled');
  } else {
    if (guessesCountdown <= 0) {
      printResult(`Poxa vida! Não foi dessa vez. O número secreto era ${secretNumber}.`);
      document.getElementById('reset').removeAttribute('disabled');
    }
    else if (chute > secretNumber) {
      printResult(`O número secreto é menor que ${chute}. Chutes restantes: ${guessesCountdown}`);
    } else {
      printResult(`O número secreto é maior que ${chute}. Chutes restantes: ${guessesCountdown}`);
    }
    guesses++;
    limparCampo();
  }
}

// Functions
function printResult(textResult) {
  document.getElementById('results').innerHTML = textResult;
  responsiveVoice.speak(textResult, 'Brazilian Portuguese Female', {rate:1.2});
}

function instructions(instructions) {
  document.getElementById('instructions').innerHTML = instructions;
}

function setSecretNumber() {
  return parseInt(Math.random() * difficulty + 1);
}

function resetGame() {
  console.clear();
  secretNumber = setSecretNumber();
  guesses = 1;
  setDifficulty ();
  console.log('O novo número secreto é ' + secretNumber);
  document.getElementById('reset').setAttribute('disabled', true);
  printResult('');
  limparCampo();
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function setDifficulty () {
  if (difficulty <= 10) {
    guessesCountdown = 4;
    var difficultyLevel = 'Fácil';
  }
  else { 
    if (difficulty <= 200) {
    guessesCountdown = 7;
    var difficultyLevel = 'Médio';
  }
  else {
    guessesCountdown = 10;
    var difficultyLevel = 'Difícil';
  }};
  console.log(`A dificuldade do jogo é ${difficultyLevel} (entre 1 e ${difficulty})`);
  console.log(`O número de tentativas é ${guessesCountdown}`);
};

function handleGuessButtonClick() {
  const guessButton = document.getElementById('guess');
  guessButton.setAttribute('disabled', 'disabled');
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
  difficulty = choice;
  setDifficulty ();
  resetGame();
  instructions(`Chute um número entre 1 e ${difficulty}`);
}

var sliderNumber = document.getElementById("numberSecret");
var outputNumber = document.getElementById("numberValue");
outputNumber.innerHTML = sliderNumber.value;

sliderNumber.oninput = function() {
  outputNumber.innerHTML = this.value;
}

var sliderTries = document.getElementById("triesNumber");
var outputTries = document.getElementById("triesValue");
outputTries.innerHTML = sliderTries.value;

sliderTries.oninput = function() {
  outputTries.innerHTML = this.value;
}