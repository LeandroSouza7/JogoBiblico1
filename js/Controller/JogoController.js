import { JogoModel } from "../Model/JogoModel.js";

export class JogoController{
    constructor(){
        this.model = new JogoModel();
    }

    lista(){
       return this.model.listaPersonagens();
    }

    add(data, cb){
        this.model.addPersonagens(data, cb);
    }

    edit(data, cb){
        this.model.editPersonagens(data, cb);
    }

    remove(data, cb){
        this.model.removePersonagens(data, cb);
    }

    numeroAleatorio(qtdPerguntas){
        this.model.getNumerosAleatorio(qtdPerguntas);
    }
}