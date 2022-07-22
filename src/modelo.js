import bd from "./database/bd.js";
export default class Dicas{
    constructor(Dica){
        this.dica = Dica; 
    }
    inserir = (dicas) => {
        bd.lista.push(dicas);
    }
    coletar = () => {
        let aleatorio = Math.floor(Math.random() * bd.lista.lenght)
        return bd.lista[aleatorio]
    }
}
