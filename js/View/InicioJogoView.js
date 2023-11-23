import { JogoController } from "../Controller/JogoController.js";

export class InicioJogoView{
    constructor(){
        this.jogoController = new JogoController();
        
        this.inicarJogo();
    }

    inicarJogo(){
        let $btnIniciarJogo = document.querySelector('.comecar');
        $btnIniciarJogo.addEventListener('click', ()=> {
            this.participantes();
        })
    }

    participantes(){
        let nomeDosParticipantes = [];
        let $inputs = document.querySelectorAll('input');

        $inputs.forEach(input => {
            if(input.value != ""){
                nomeDosParticipantes.push(input.value);
            }
        });

        if(nomeDosParticipantes == ""){
            return alert("Adicione ao menos um participante");
        }

        window.location.href = "jogo.html";

        return nomeDosParticipantes;
    }
}