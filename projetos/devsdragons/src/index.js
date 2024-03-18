import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js"

const magoOswaldo = new Mago ('Oswaldo', 5, 'Fogo', 10, 10);
const magaJulia = new Mago ('Julia', 3, 'Gelo', 7, 7);

const personagens = [magoOswaldo, magaJulia];

new PersonagemView(personagens).render()
