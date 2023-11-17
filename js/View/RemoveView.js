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

    carregarPersonagens(){
        // this.listView.carregarPersonagens();
        console.log('VHEGOU')
        this.$ulPersonagens.innerHTML = "";
        if(this.personagensEncontrados == ""){
            this.jogoController.lista()
                .then(resposta => {
                    this.$ulPersonagens.innerHTML = "";
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
            this.personagensEncontrados.forEach(element =>{
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
                this.personagensEncontrados = [];
                this.carregarPersonagens();
                const $btnVoltarTela = document.querySelector('.btnVoltarTela')
                $btnVoltarTela.style = 'display: none;';

            }, 1000)
        }
    }

    pesquisarPersonagem(){
        const $btnPersonagem = document.querySelector('.btnPersonagem');
        const $btnId = document.querySelector('.btnId');

        $btnPersonagem.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            let $valuePersonagemBtn = document.querySelector('.namePersonagem').value;
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if($valuePersonagemBtn == element.personagem){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens();
                            this.voltarTelaParaTodosOsPersonagens();
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
            this.personagensEncontrados = [];
            let $valuePersonagemId = document.querySelector('.idPersonagem').value;
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if($valuePersonagemId == element.id){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens();
                            this.voltarTelaParaTodosOsPersonagens();
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

    voltarTelaParaTodosOsPersonagens(){
        const $btnVoltarTela = document.querySelector('.btnVoltarTela')
        $btnVoltarTela.style = 'display: block;';

        $btnVoltarTela.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            this.carregarPersonagens();
            $btnVoltarTela.style = "display: none;";
        })
    }
}