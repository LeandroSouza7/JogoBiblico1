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

    edit(data){
        return this.model.editPersonagens(data);
    }

    remove(data){
        return this.model.removePersonagens(data);
    }

    numeroAleatorio(qtdPerguntas){
        this.model.getNumerosAleatorio(qtdPerguntas);
    }
}