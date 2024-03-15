export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao

    constructor(nome, vida, mana, level, tipo, descricao) {
        this.nome = nome
        this.vida = vida
        this.mana = mana
        this.level = level
        this.tipo = tipo
        this.descricao = descricao
    }

    obterInsignia() {
        if(this.level >= 5){
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}