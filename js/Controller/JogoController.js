import { JogoModel } from "../Model/JogoModel.js";

export class JogoController{
    constructor(){
        this.model = new JogoModel();
    }

    lista(){
       return this.model.listaPersonagens();
    }

    pesquisaByString(personagemBuscadoByString){
        if(typeof personagemBuscadoByString != 'string'){
            alert("Personagem deve ser uma string");

            return;
        }

        return this.model.pesquisaPersonagemByString(personagemBuscadoByString);
    }

    pesquisaById(personagemBuscadoByID){
        if(typeof personagemBuscadoByID != 'number'){
            alert("Personagem deve ser um id");

            return;
        }

        this.model.pesquisaPersonagemById(personagemBuscadoByID);
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