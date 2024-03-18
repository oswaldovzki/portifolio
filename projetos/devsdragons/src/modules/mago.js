import { Personagem } from "./personagem.js"

export class Mago extends Personagem{ 
    elementoMagico
    levelMagico
    inteligencia
    tipo = 'Mago'
 
   constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level)
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