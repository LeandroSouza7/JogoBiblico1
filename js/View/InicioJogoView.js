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
            this.placar();
            window.location.href = "jogo.html";
        })

    }

    participantes(){
        let nomeDosParticipantes = [];
        let $inputs = document.querySelectorAll('.inputPlayers');

        $inputs.forEach(input => {
            if(input.value != ""){
                nomeDosParticipantes.push(input.value);
            }
        });

        if(nomeDosParticipantes == ""){
            throw new Error("Não dá");
            // return alert("Adicione ao menos um participante");
        }

        sessionStorage.setItem('participantes', JSON.stringify(nomeDosParticipantes));
    }

    placar(){
        const $inputPlacar = document.querySelector('.inputPlacar').value;

        if(!$inputPlacar){
            throw new Error("Não dá");
            // alert("Defina um placar");
        }

        sessionStorage.setItem('placar', JSON.stringify($inputPlacar));
    }
}