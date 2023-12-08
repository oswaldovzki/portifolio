// Objeto no qual vários valores são atribuídos a ele
var paulo = {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var rafa = {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

//escrever no HTML os dados da tabela
var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
    elementoTabela.innerHTML = `
    <tr>
        <td>${paulo.nome}</td>
        <td>${paulo.vitoria}</td>
        <td>${paulo.empate}</td>
        <td>${paulo.derrota}</td>
        <td>${paulo.pontos}</td>
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
    </tr>
`
}

function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirNaTela()
    console.log(jogador)
};

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos = jogador.pontos + 1
    exibirNaTela()
    console.log(jogador)
};
function adicionarDerrota(jogador) {
    jogador.derrota++
    jogador.pontos = jogador.pontos + 0
    exibirNaTela()
    console.log(jogador)
};
//Para exibir no console, basta usar o nome do objeto.chave
// console.log (paulo.nome)
// console.log (rafa.nome)