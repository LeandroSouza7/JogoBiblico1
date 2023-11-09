import { JogoController } from "../Controller/JogoController.js";
// import { PersonagensView } from "./PersonagensView";

export class RemoveView{
    constructor(){
        this.jogoController = new JogoController();
        // this.personagensView = new PersonagensView();

        this.$valuePersonagemBtn = document.querySelector('.namePersonagem').value;
        this.$btnPersonagem = document.querySelector('.btnPersonagem');
        this.$valuePersonagemId = document.querySelector('.idPersonagem').value;
        this.$btnId = document.querySelector('.btnId');
        this.$ulPersonagens = document.querySelector('.ulPersonagens');

        this.carregarPersonagens();
    }

    carregarPersonagens(){
        this.jogoController.lista()
            .then(resposta => {
                console.log(resposta);
            })
    }

}