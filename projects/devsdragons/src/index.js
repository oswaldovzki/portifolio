import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoOswaldo = new ArqueiroMago ('Oswaldo', 11, 15, 'Fogo', 15, 15);
const magaJulia = new Guerreiro ('Julia', 10);
const archerFey = new Arqueiro ('Fey', 2, 10);
const arqueiroMagoChico = new Mago ('Chico', 5, 'Ar', 5, 6);

const personagens = [magoOswaldo, magaJulia, archerFey, arqueiroMagoChico];

new PersonagemView(personagens).render()
