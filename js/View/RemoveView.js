import { JogoController } from "../Controller/JogoController.js";
// import { ListView } from "./ListView.js";

export class RemoveView{
    constructor(){
        this.jogoController = new JogoController();
        this.$ulPersonagens = document.querySelector('.ulPersonagens');
        // this.listView = new ListView($ulPersonagens);

        this.personagensEncontrados = [];

        this.carregarPersonagens();
        this.pesquisarPersonagem();
    }

    carregarPersonagens(personagemPesquisado){
        // this.listView.carregarPersonagens();
        this.$ulPersonagens.innerHTML = "";
        if(personagemPesquisado == undefined){
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
        }else{
            personagemPesquisado.forEach(element =>{
                const $li = document.createElement('li');
                const $textLi = document.createTextNode(element.id + " " + element.personagem);
                $li.appendChild($textLi); 

                const $btnRemovePersonagem = document.createElement('button');
                $btnRemovePersonagem.classList.add('removePersona');
                $btnRemovePersonagem.setAttribute('value', element.id)
                const $textButton = document.createTextNode('Apagar personagem');
                $btnRemovePersonagem.appendChild($textButton);

                $li.appendChild($btnRemovePersonagem);
                this.$ulPersonagens.appendChild($li);

                this.apagarPersonagens();
            })
        }
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
        const $btnPersonagem = document.querySelector('.btnPersonagem');
        const $btnId = document.querySelector('.btnId');

        $btnPersonagem.addEventListener('click', ()=>{
            let $valuePersonagemBtn = document.querySelector('.namePersonagem').value;
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if($valuePersonagemBtn == element.personagem){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens(this.personagensEncontrados);
                            // this.voltarTelaParaTodosOsPersonagens();
                            document.querySelector('.namePersonagem').value = "";
                        }else{
                            qtd += 1;
                            if(qtd == resposta.length){
                                alert("Personagem não encontrado");
                            } 
                        }
                    })
                })
        })

        $btnId.addEventListener('click', ()=>{
            let $valuePersonagemId = document.querySelector('.idPersonagem').value;
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if($valuePersonagemId == element.id){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens(this.personagensEncontrados);
                            // this.voltarTelaParaTodosOsPersonagens();
                            document.querySelector('.namePersonagem').value = "";
                        }else{
                            qtd += 1;
                            if(qtd == resposta.length){
                                alert("Personagem não encontrado");
                            } 
                        }
                    })
                })
        })

    }
}