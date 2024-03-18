export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    constructor(nome, level, descricao) {
        this.nome = nome
        this.level = level
        this.descricao = descricao
    }

    obterInsignia() {
        if(this.level >= 5){
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}