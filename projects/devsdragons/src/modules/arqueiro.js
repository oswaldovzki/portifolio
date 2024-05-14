import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    static descricao = 'You have my bow!'
    
    constructor(nome, destreza) {
        super(nome)
         this.destreza = destreza
     }

     obterInsignia() {
        if (this.destreza >= 10) {
            return `ArchArqueiro`
        }
        return super.obterInsignia()
    }
}