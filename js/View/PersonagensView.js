import { JogoController } from "../Controller/JogoController.js";
export class PersonagensView{
    constructor(){
        this.jogoController = new JogoController();
        this.$inputs = document.querySelectorAll('input');
        this.$inputEnviarDado = document.querySelector('.subInput');

        this.$inputs[0].focus();

        this.eventos();
    }

    eventos(){
        document.addEventListener('keypress', (e)=>{
            if(e.key == "Enter"){
                this.pegarDados();
            }
        });

        this.$inputEnviarDado.addEventListener('click', ()=> {

            this.pegarDados();
            
        });
    }

    pegarDados(){
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

            this.enviarDados(data);
    }

    enviarDados(data){
        this.jogoController.add(data)
                .then(() => {
                    let l = 0;
                    while(l <= 11){
                        this.$inputs[l].value = "";                        
        
                        l++;
                    }
                    const msg = document.querySelector('.msg');
                    msg.classList.remove('none');
                    msg.innerHTML = "Enviado com suceeso";
                    msg.style.backgroundColor = "green";

                    setTimeout(function(){
                        msg.classList.add('none');
                    }, 2000)
                });

    }
}
    