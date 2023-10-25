import { JogoController } from "../Controller/JogoController.js";

export class ListView{
    constructor(listContainer){
        console.log('cheogu aqui');
        this.jogoController = new JogoController();
        this.$listContainer = listContainer;
        this.init();
    }

    init(){
        console.log('cheogu aqui')
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
}