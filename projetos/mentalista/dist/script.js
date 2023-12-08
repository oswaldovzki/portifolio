//Math.random pega um numero entre 0 e 0,999... e parseInte arredonda o numero. multiplica por 1001 para pegar o range de 0 a 1000.
var numeroSecreto = parseInt(Math.random() * 1001);

//enquanto o chute for diferente do numero secreto
while (chute != numeroSecreto) {
  var chute = prompt("Digite um número entre 0 e 1000");
  //se o chute for igual ao numero secreto, faça um alert de sucesso
  if (chute == numeroSecreto) {
    alert("Acertou!");
  }
  //valor para exibição do resultado
  else if (chute == 1001) {
    alert("O numero secreto é " + numeroSecreto);
    //se nao, diga se é menor ou maior que o numero secreto.
  } else if (chute < numeroSecreto) {
    alert("Errou! O número Secreto é maior que " + chute);
  } else if (chute > numeroSecreto) {
    alert("Errou! O número Secreto é menor que o " + chute);
  }
}

/*
//tratamento de exceções
  if (chute < 1) {
    alert(
      "Ops... O número digitado é menor que 1. Digite um número entre 1 e 1000"
    );
  } else if (chute > 1000) {
    alert("Ops... o número digitado é maior que 1000");
  }
*/