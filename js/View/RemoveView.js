import { JogoController } from "../Controller/JogoController.js";
import { ListView } from "./ListView.js";

export class RemoveView{
    constructor(){
        this.jogoController = new JogoController();

        this.$valuePersonagemBtn = document.querySelector('.namePersonagem').value;
        this.$btnPersonagem = document.querySelector('.btnPersonagem');
        this.$valuePersonagemId = document.querySelector('.idPersonagem').value;
        this.$btnId = document.querySelector('.btnId');
        const $ulPersonagens = document.querySelector('.ulPersonagens');
        this.listView = new ListView($ulPersonagens);

        this.carregarPersonagens();
        this.pesquisarPersonagem();
    }

    carregarPersonagens(personagemPesquisado){
        this.listView.carregarPersonagens();
        // console.log(personagemPesquisado);
        // if(personagemPesquisado == undefined){
        //     this.jogoController.lista()
        //         .then(resposta => {
        //             resposta.forEach(personagem => {
        //                 const $li = document.createElement('li');
        //                 const $textLi = document.createTextNode(personagem.id + " " + personagem.personagem);
        //                 $li.appendChild($textLi); 

        //                 const $btnRemovePersonagem = document.createElement('button');
        //                 $btnRemovePersonagem.classList.add('removePersona');
        //                 $btnRemovePersonagem.setAttribute('value', personagem.id)
        //                 const $textButton = document.createTextNode('Apagar personagem');
        //                 $btnRemovePersonagem.appendChild($textButton);

        //                 $li.appendChild($btnRemovePersonagem);
        //                 this.$ulPersonagens.appendChild($li);

        //                 this.apagarPersonagens();
        //             })
        //         })
        // }else{
        //     const $li = document.createElement('li');
        //     const $textLi = document.createTextNode(personagemPesquisado.id + " " + personagemPesquisado.personagem);
        //     $li.appendChild($textLi); 

        //     const $btnRemovePersonagem = document.createElement('button');
        //     $btnRemovePersonagem.classList.add('removePersona');
        //     $btnRemovePersonagem.setAttribute('value', personagemPesquisado.id)
        //     const $textButton = document.createTextNode('Apagar personagem');
        //     $btnRemovePersonagem.appendChild($textButton);

        //     $li.appendChild($btnRemovePersonagem);
        //     this.$ulPersonagens.appendChild($li);

        //     this.apagarPersonagens();
        // }
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
        const $msg = document.querySelector('.msg');

        if(msg === "certo"){
            $msg.classList.remove('none')
            $msg.innerHTML = "Excluído com suceeso";
            $msg.style.backgroundColor = "green";
            this.$ulPersonagens.innerHTML = "";

            setTimeout(()=> {
                $msg.classList.add('none');
                this.carregarPersonagens();
            }, 1000)
        }
    }

    pesquisarPersonagem(){
        // this.$btnPersonagem.addEventListener('click', this.carregarPersonagens(this.listView.pesquisarPersonagemByNome()));
        // this.$btnId.addEventListener('click', this.carregarPersonagens(this.listView.pesquisarPersonagemById()));
        // this.listView.pesquisarPersonagemByNome(this.$btnPersonagem, this.$valuePersonagemBtn);
        // this.listView.pesquisarPersonagemById(this.$btnId, this.$valuePersonagemId);
    }
}