import { JogoController } from "../Controller/JogoController.js";

export class ListView{
    constructor(){
        this.jogoController = new JogoController();
        this.init();
    }

    init(){
       this.jogoController.lista()
        .then(resposta => console.log(resposta));
    }
}