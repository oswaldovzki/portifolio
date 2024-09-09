let listaDeItens = []
let itemAEditar

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const ulItens = document.getElementById('lista-de-itens')
const ulItensComprados = document.getElementById('itens-comprados')
const containerComprados = document.querySelector('.comprados')
const containerClasses = document.querySelector('.radio-container')
const listaRecuperada = localStorage.getItem('listaDeItens')

/* Atualização da Local Storage */
function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))
}

/* Recupera Itens da Local Storage, se ela estiver populada */
if(listaRecuperada) {
    listaDeItens = JSON.parse(listaRecuperada)
    mostrarItem()
} else {
    listaDeItens = []
}

/* Evento de submissão dos dados do formulário */
form.addEventListener('submit', function (event) {
    event.preventDefault()
    salvarItem()
    mostrarItem()
    itensInput.focus()
})

/* Função de salvar item adicionado com tratamento de duplicidade */
function salvarItem() {
    const comprasItem = itensInput.value;
    const category = document.querySelector('input[type="radio"][name="shopping_category"]:checked');
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if (checarDuplicado) {
        alert("Item já existe.")
    } else {
        listaDeItens.push({
            valor: comprasItem,
            checar: false,
            category: category.value
        })
    }

    itensInput.value = ""
    category.checked = false

    const sortedItems = listaDeItens.sort(compareByCategory);
    console.log(sortedItems)

}

function toggleRadioContainer() {
    if (itensInput.value.trim() === '') {
        // If input is empty, add the .hidden class
        containerClasses.classList.add('hidden');
    } else {
        // If input is not empty, remove the .hidden class
        containerClasses.classList.remove('hidden');
    }
}

// Attach the input event listener to the input field
itensInput.addEventListener('input', toggleRadioContainer);

// Initial check on page load
toggleRadioContainer();

function mostrarComprados() {
    if (ulItensComprados.children.length === 0) {
        containerComprados.classList.add("hidden")
    } else {
        containerComprados.classList.remove("hidden")
    }
}

/* Função para renderizar o item no HTML */
function mostrarItem() {
    ulItens.innerHTML = ""
    ulItensComprados.innerHTML = ""
    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            ulItensComprados.innerHTML += `
            <li class="body__main__list-items-compra" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="checkbox-input" />
                    <span class="itens-comprados text-input">${elemento.valor}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash checkbox-input deletar"></i>
                </div>
            </li>
            `
        } else {
            ulItens.innerHTML += `
            <li class="body__main__list-items-compra" data-value="${index}">
                <div>
                    <input type="checkbox" class="checkbox-input" />
                    <input type="text" class="text-input" value="${elemento.valor}" ${index !== Number(itemAEditar) ? "disabled" : ""}></input>
                </div>

                <div>
                    ${index === Number(itemAEditar) ? '<button onClick="salvarEdicao()"><i class="fa-regular fa-floppy-disk checkbox-input"></i></button>' : '<i class="fa-regular checkbox-input fa-pen-to-square editar"></i>'}
                    <i class="fa-solid fa-trash checkbox-input deletar"></i>
                </div>
            </li>
            `
        }
    })

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]')

    inputsCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens[valorDoElemento].checar = evento.target.checked
            console.log(listaDeItens[valorDoElemento].checar)
            mostrarItem()
        })
    })

    const deletarObjetos = document.querySelectorAll(".deletar")

    deletarObjetos.forEach(i => {
        i.addEventListener('click', (evento) => {
            if (confirm(`Tem certeza que deseja remover o item?`)) {
                valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
                listaDeItens.splice(valorDoElemento,1)
                mostrarItem()
            }
        })
    })

    const editarItens = document.querySelectorAll('.editar')

    editarItens.forEach(i => {
        i.addEventListener('click', (evento) => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value')
            mostrarItem()
        })
    })

    atualizaLocalStorage()
    mostrarComprados()
}

/* Salva o item editado */

function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`)
    listaDeItens[itemAEditar].valor = itemEditado.value
    itemAEditar = -1
    mostrarItem()
}

/* Organizar por gategoria */
function compareByCategory(a, b) {
    if (a.category < b.category) {
      return -1;
    } else if (a.category > b.category) {
      return 1;
    } else {
      return 0;
    }
  }