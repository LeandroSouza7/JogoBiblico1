import { JogoController } from "../Controller/JogoController.js";

export class ListView{
    constructor(listContainer, btnPersonagemBuscado){
        this.jogoController = new JogoController();
        this.$listContainer = listContainer;
        // this.$btnPersonagemBuscado = btnPersonagemBuscado;
        this.init();
        this.pesquisarPersonagemByNome();
    }

    init($container){

        if($container == undefined){ 
            $container = this.$listContainer;
        }

       this.jogoController.lista()
        .then(resposta => {
                    resposta.forEach(element => {
                    const $li = document.createElement('li');
                    const $text = document.createTextNode(element.id + " " + element.personagem);
                    $li.appendChild($text); 
                    $container.appendChild($li);
                });
            });
    }

    pesquisarPersonagemByNome(){
        const $btnPersonagemBuscado = document.querySelector('.btnPersonagem');

        $btnPersonagemBuscado.addEventListener('click', ()=> {
            let personagemProcuradoByNome = document.querySelector('.textInput').value;
        
            this.jogoController.pesquisaByString(personagemProcuradoByNome)
                .then(resposta => {
                    let qtd = 0;
                    personagemProcuradoByNome = personagemProcuradoByNome.toLowerCase();
                    resposta.forEach(element =>{
                        if(personagemProcuradoByNome == element.personagem){
                            console.log(element);
                            return element;
                            //init com o element
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