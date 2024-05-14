import { Personagem } from "./personagem.js"

export class Mago extends Personagem{ 
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'Conhecimento é poder!'
 
   constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
         this.elementoMagico = elementoMagico
         this.levelMagico = levelMagico
         this.inteligencia =  inteligencia
     }
 
     obterInsignia() {
        if (this.levelMagico >= 10 && this.inteligencia >= 10) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
 }