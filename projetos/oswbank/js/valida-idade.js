export default function maiorDeIdade(campo) {
    const DataDeNascimento = new Date(campo.value);
    if (!validaIdade(DataDeNascimento)) {
        campo.setCustomValidity('O Usuário não e maior de idade')
    };
   
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}

