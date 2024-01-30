let dificuldade = 100;
let contador = 6;
let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log ('O número secreto é ' + numeroSecreto);

let tentativas = 1;

function adivinharNumero() {
  let chute = document.getElementById('container__input').value;
  contador--;

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';  
    alert(`Isso Ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`);
  } else {
      if (chute > numeroSecreto) {
          alert(`O número secreto é menor que ${chute}. Chutes restantes: ${contador}`);
      } else {
          alert(`O número secreto é maior que ${chute}. Chutes restantes: ${contador}`);
      }
      tentativas++;
  }

  if (contador <= 0) {
      alert(`Poxa vida! Não foi dessa vez. O número secreto era ${numeroSecreto}. Deseja jogar novamente?`);
  }

  
}
