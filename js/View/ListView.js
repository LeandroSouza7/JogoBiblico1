import { JogoController } from "../Controller/JogoController.js";

export class ListView{
    constructor(listContainer, btnPersonagemBuscado){
        this.jogoController = new JogoController();
        this.$listContainer = listContainer;
        // this.$btnPersonagemBuscado = btnPersonagemBuscado;
        this.init();
        this.pesquisarPersonagemByNome();
        this.pesquisarPersonagemById();
        this.$btnVoltarTela = document.querySelector('.btnVoltarTela');

    }

    init(personagemEncontrado){
       this.jogoController.lista()
        .then(resposta => {
                if(personagemEncontrado == undefined){ 
                    this.$listContainer.innerHTML = "";
                    resposta.forEach(element => {
                        const $li = document.createElement('li');
                        const $text = document.createTextNode(element.id + " " + element.personagem);
                        $li.appendChild($text); 
                        this.$listContainer.appendChild($li);
                    });
                }else{
                    this.$listContainer.innerHTML = "";
                    const $li = document.createElement('li');
                    const $text = document.createTextNode(personagemEncontrado.id + " " + personagemEncontrado.personagem);
                    $li.appendChild($text); 
                    this.$listContainer.appendChild($li);
                }
                    
            });
    }

    pesquisarPersonagemByNome(){
        const $btnPersonagemBuscado = document.querySelector('.btnPersonagem');

        $btnPersonagemBuscado.addEventListener('click', ()=> {
            let personagemProcuradoByNome = document.querySelector('.textInput');
        
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    personagemProcuradoByNome = personagemProcuradoByNome.value.toLowerCase();
                    resposta.forEach(element =>{
                        if(personagemProcuradoByNome == element.personagem){
                            this.init(element);
                            this.voltarTelaParaTodosOsPersonagens();
                            document.querySelector('.textInput').value = "";
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

    pesquisarPersonagemById(){
        const $btnPersonagemBuscado = document.querySelector('.btnId');

        $btnPersonagemBuscado.addEventListener('click', ()=> {
            let personagemProcuradoById = document.querySelector('.textId');
        
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if(personagemProcuradoById.value == element.id){
                            this.init(element);
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
            // this.$listContainer.innerHTML = "";
            this.init();
            this.$btnVoltarTela.style = "display: none;";
        })
    }
}