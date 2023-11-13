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
                resposta.forEach(personagem => {
                    const $li = document.createElement('li');
                    const $textLi = document.createTextNode(personagem.id + " " + personagem.personagem);
                    $li.appendChild($textLi); 

                    const $btnRemovePersonagem = document.createElement('button');
                    $btnRemovePersonagem.classList.add('removePersona');
                    $btnRemovePersonagem.setAttribute('value', personagem.id)
                    const $textButton = document.createTextNode('Apagar personagem');
                    $btnRemovePersonagem.appendChild($textButton);

                    $li.appendChild($btnRemovePersonagem);
                    this.$ulPersonagens.appendChild($li);

                    this.apagarPersonagens();
                })
            })
    }

    apagarPersonagens(){
        let btnRemovePersona = document.querySelectorAll('.removePersona');
        btnRemovePersona.forEach(btn => {
            btn.addEventListener('click', (e)=> {
                this.jogoController.remove(e.target.getAttribute("value"))
                    .then(respponse => console.log(respponse, this.msgDeuCertoOuErrado("certo")));
                // valuePersonagemBtn.value = "";
                // aluePersonagemId.value = "";
            })

        })    
    }

    msgDeuCertoOuErrado(msg){
        console.log(msg);
    }
}