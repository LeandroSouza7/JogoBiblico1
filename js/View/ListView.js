import { JogoController } from "../Controller/JogoController.js";

export class ListView{
    constructor(listContainer, btnPersonagemBuscado){
        this.jogoController = new JogoController();
        this.$listContainer = listContainer;
        // this.$btnPersonagemBuscado = btnPersonagemBuscado;
        this.init();
        this.pesquisarPersonagemByNome();
        this.pesquisarPersonagemById();
    }

    init(personagemEncontrado){
       this.jogoController.lista()
        .then(resposta => {
                if(personagemEncontrado == undefined){ 
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
            let personagemProcuradoByNome = document.querySelector('.textInput').value;
        
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    personagemProcuradoByNome = personagemProcuradoByNome.toLowerCase();
                    resposta.forEach(element =>{
                        if(personagemProcuradoByNome == element.personagem){
                            this.init(element);
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
            console.log("chegou aqui");
            let personagemProcuradoById = document.querySelector('.textId').value;
            console.log(personagemProcuradoById);
        
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if(personagemProcuradoById == element.id){
                            this.init(element);
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
}