function exibirValorDaLista() {
    const listaDeValores = ["Valor 1", "Valor 2", "Valor 3"];
    const indiceAleatorio = Math.floor(Math.random() * listaDeValores.length);
    const valorAleatorio = listaDeValores[indiceAleatorio];
  
    // Exibir o valor aleatório na tela
    const elementoHTML = document.getElementById('valorAleatorio');
    elementoHTML.textContent = valorAleatorio;