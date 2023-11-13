import { JogoModel } from "../Model/JogoModel.js";

export class JogoController{
    constructor(){
        this.model = new JogoModel();
    }

    lista(){
       return this.model.listaPersonagens();
    }

    add(data){
        return this.model.addPersonagens(data);
    }

    edit(data, cb){
        this.model.editPersonagens(data, cb);
    }

    remove(data){
        return this.model.removePersonagens(data);
    }

    numeroAleatorio(qtdPerguntas){
        this.model.getNumerosAleatorio(qtdPerguntas);
    }
}