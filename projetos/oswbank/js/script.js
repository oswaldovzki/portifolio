import cpfValido from "./valida-cpf.js";
import maiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo)); 
})

function verificarCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        cpfValido(campo);
    } if (campo.name == "aniversario" && campo.value != "") {
        maiorDeIdade(campo)
    }
}


