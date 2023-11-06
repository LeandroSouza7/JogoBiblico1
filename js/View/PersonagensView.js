import { JogoController } from "../Controller/JogoController.js";
export class Personagens{
    constructor(){
        this.jogoController = new JogoController();
        this.$inputs = document.querySelectorAll('input');
        this.$inputEnviarDado = document.querySelector('.subInput');

        this.$inputs[0].focus();

        this.enviarDados();
    }

    enviarDados(){
        this.$inputEnviarDado.addEventListener('click', ()=> {
            let dataArray = [];
            let x = 0;
            while(x <= 11){
                if(this.$inputs[x].value === ""){
                    alert("Preencha todos os inputs");
                    return;        
                }   

                dataArray.push(this.$inputs[x].value);
                    

                x++;
            }


            const data = {"nivel": dataArray[0], "personagem": dataArray[1], "dicaUm": dataArray[2], "dicaDois": dataArray[3], "dicaTres": dataArray[4], "dicaQuatro": dataArray[5], "dicaCinco": dataArray[6], "dicaSeis": dataArray[7], "dicaSete": dataArray[8], "dicaOito": dataArray[9], "dicaNove": dataArray[10], "dicaDez": dataArray[11]};

            this.jogoController.add(data);
            
        });
    }
}
    