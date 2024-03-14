const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponiveis() : filtrarCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}

function filtrarCategoria(categoria) {
    return livros.filter(livros => livros.categoria == categoria);
}

function filtrarDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
}

