import { JogoController } from "../Controller/JogoController.js";

export class ListView{
    constructor(listContainer, btnPersonagemBuscado){
        this.jogoController = new JogoController();
        this.$listContainer = listContainer;
        // this.$btnPersonagemBuscado = btnPersonagemBuscado;
        this.init();
        this.pesquisarPersonagemByNome();
    }

    init(){
       this.jogoController.lista()
        .then(resposta => {
                    resposta.forEach(element => {
                    const $li = document.createElement('li');
                    const $text = document.createTextNode(element.id + " " + element.personagem);
                    $li.appendChild($text); 
                    this.$listContainer.appendChild($li);
                });
            });
    }

    pesquisarPersonagemByNome(){
        const $btnPersonagemBuscado = document.querySelector('.btnPersonagem');
        $btnPersonagemBuscado.addEventListener('click', ()=> {
            let personagemProcuradoByNome = document.querySelector('.textInput').value;
            // console.log(this.JogoController);
            // console.log(personagemProcuradoByNome)
            // this.jogoController.pesquisaByString(personagemProcuradoByNome)
            //     .then(resposta => {
            //         console.log(resposta);
            //     })
            this.jogoController.pesquisaByString(personagemProcuradoByNome);
        });
        
    } 
}