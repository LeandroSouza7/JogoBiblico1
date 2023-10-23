import { JogoModel } from "../Model/JogoModel.js";

export class JogoController{
    constructor(){
        this.model = new JogoModel();
    }

    lista(){
       return this.model.listaPersonagens();
    }

    pesquisaByString(personagemBuscado){
        if(typeof personagemBuscado != 'string'){
            alert("Personagem deve ser uma string");

            return;
        }

        this.model.pesquisaPersonagemByString(personagemBuscado);
    }

    pesquisaById(personagemBuscado){
        if(typeof personagemBuscado != 'number'){
            alert("Personagem deve ser um id");

            return;
        }

        this.model.pesquisaPersonagemById(personagemBuscado);
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