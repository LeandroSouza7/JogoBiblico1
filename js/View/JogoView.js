import { JogoController } from "../Controller/JogoController.js";

export class JogoView{
    constructor(){
        this.jogoController = new JogoController();
        this.$container = document.querySelector('.container');
        this.dadosJogo();
        this.personagens = [];

        this.sequenciaAleatoria = [];
    }

    dadosJogo(){
        this.jogoController.lista()
            .then(personagens => {
                let qtdDePersonagens = personagens.length;
                this.sequenciaAleatoria = this.jogoController.numeroAleatorio(qtdDePersonagens);
                this.personagens = personagens;
                this.mostrarPersonagem();
            });
    }

    mostrarPersonagem(){
        console.log(this.sequenciaAleatoria);
        let idPersonagemMostrado = this.sequenciaAleatoria.shift();
        let htmlDados = `
                <div class="div_principal">
                <div class="container caixaPerguntas">
                    <div class="dificuldade">${this.personagens[idPersonagemMostrado].nivel}</div>
                    <span class="CodigoDaPergunta h1 naoFoi mr-3">${this.personagens[idPersonagemMostrado].id}</span><span class="h1 personagem">Personagem:</span><span class="nomePersonagem h2 p-2">${this.personagens[idPersonagemMostrado].personagem}</span>
                    <div class="dicasPersonagens">
                        <div class="metade1">
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">1</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaUm}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">2</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaDois}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">3</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaTres}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">4</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaQuatro}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">5</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaCinco}</span></div><button class="btn  btn_dica">Ver dica</button>
                            </div>
                            <br>
                        </div>
    
                        <div class="metade2">
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">6</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaSeis}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">7</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaSete}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">8</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaOito}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">9</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaNove}</span></div><button class="btn btn_dica">Ver dica</button>
                            </div>
                            <br>
                            <div class="divPai">
                                <div class="divDicas"><span class="mr-2 ml-1 number">10</span><span class="dica">${this.personagens[idPersonagemMostrado].dicaDez}</span></div><button class="btn  btn_dica">Ver dica</button>
                            </div>
                            <br>
                    </div>	
                </div>

                <span class="verPersonagem btn mb-5">Ver resposta</span>
				<span class="btn proximo mb-5">Próximo</span>
		    </div>`;
            this.$container.innerHTML = htmlDados; 
            this.verDicas();
            this.proximoPersonagem(); 
    }

    verDicas(){
        let $btnsDicas = document.querySelectorAll('.btn_dica');
        $btnsDicas.forEach(dica => {
            dica.addEventListener('click', (e) => {
                e.target.parentNode.querySelector('.dica').classList.add('visible');
            })
        })
    }

    proximoPersonagem(){
        let $btnProximo = document.querySelector('.proximo');
        $btnProximo.addEventListener('click', ()=> {
            this.mostrarPlacar();
            // this.mostrarPersonagem();
        })
    }

    mostrarPlacar(){
        const $msgVencedor = document.querySelector('.msgVencedor');
        let participantes = sessionStorage.getItem('participantes');
        participantes = JSON.parse(participantes);
        participantes.forEach(jogador => {
            $msgVencedor.querySelector('ul').innerHTML += "<li>"+ jogador +"</li>";
        })

        $msgVencedor.style.display = "block";

        
    }
}