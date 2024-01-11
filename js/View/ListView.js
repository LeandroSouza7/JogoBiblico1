import { JogoController } from "../Controller/JogoController.js";

export class ListView{
    constructor(listContainer = document.querySelector('.ulPersonagens')){
        this.jogoController = new JogoController();
        this.$listContainer = listContainer;
        this.$btnVoltarTela = document.querySelector('.btnVoltarTela');
        this.carregarPersonagens();
        this.pesquisarPersonagemByNome();
        this.pesquisarPersonagemById();

        this.personagensEncontrados = [];
    }

    carregarPersonagens(){
       this.jogoController.lista()
        .then(resposta => {
                if( this.personagensEncontrados == ""){ 
                    this.$listContainer.innerHTML = "";
                    resposta.forEach(element => {
                        const $li = document.createElement('li');
                        const $p = document.createElement('p');
                        const $textP = document.createTextNode(element.id + " " + element.personagem);
                        $p.appendChild($textP); 
                        $li.appendChild($p); 
                        this.$listContainer.appendChild($li);
                    });
                }else{ 
                    this.$listContainer.innerHTML = "";
                    this.personagensEncontrados.forEach(element => {
                        const $li = document.createElement('li');
                        const $p = document.createElement('p');
                        const $textP = document.createTextNode(element.id + " " + element.personagem);
                        $p.appendChild($textP); 
                        $li.appendChild($p); 
                        this.$listContainer.appendChild($li);
                    });                    
                }
                    
            });
    }

    pesquisarPersonagemByNome(){
        const $btnPersonagemBuscado = document.querySelector('.btnPersonagem');

        $btnPersonagemBuscado.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            let personagemProcuradoByNome = document.querySelector('.textInput').value;
        
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if(personagemProcuradoByNome == element.personagem){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens();
                            this.voltarTelaParaTodosOsPersonagens();
                            document.querySelector('.textInput').value = "";
                        }else{
                            qtd += 1;
                            if(qtd == resposta.length){
                                alert("Personagem não encontrado");
                            } 
                        }
                    })
                })
        });
        
    } 

    pesquisarPersonagemById(){
        const $btnPersonagemBuscado = document.querySelector('.btnId');

        $btnPersonagemBuscado.addEventListener('click', ()=> {
            this.personagensEncontrados = [];
            let personagemProcuradoById = document.querySelector('.textId');
        
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if(personagemProcuradoById.value == element.id){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens();
                            personagemProcuradoById.value = "";
                            this.voltarTelaParaTodosOsPersonagens();
                            return;
                        }else{
                            qtd += 1;
                            if(qtd == resposta.length){
                                alert("Personagem não encontrado");
                            } 
                        }
                    })
                })
        });
        
    } 

    voltarTelaParaTodosOsPersonagens(){
        this.$btnVoltarTela.style = 'display: block;';

        this.$btnVoltarTela.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            this.carregarPersonagens();
            this.$btnVoltarTela.style = "display: none;";
        })
    }
}