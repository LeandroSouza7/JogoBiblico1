import { JogoController } from "../Controller/JogoController.js";

export class JogoView{
    constructor(){
        this.jogoController = new JogoController();
        this.$container = document.querySelector('.container');
        this.personagens = [];
        this.sequenciaAleatoria = [];
        
        this.dadosJogo();
    }

    dadosJogo(){
        console.log("Dados jogo")
        this.jogoController.lista()
            .then(personagens => {
                let qtdDePersonagens = personagens.length;
                this.sequenciaAleatoria = this.jogoController.numeroAleatorio(qtdDePersonagens);
                this.personagens = personagens;
                this.mostrarPersonagem();
            });
            const $msgVencedor = document.querySelector('.msgVencedor');
            let participantes = sessionStorage.getItem('participantes');
            participantes = JSON.parse(participantes);
            participantes.forEach(jogador => {
                const $li = document.createElement('li');
                const $p = document.createElement('p');
                const $textLiP = document.createTextNode(jogador);
                const $input = document.createElement('input');
                $input.classList.add('inputPlacar');
                $input.setAttribute('type', 'number');
                $p.appendChild($textLiP);
                $li.appendChild($p); 
                $li.appendChild($input);
                $msgVencedor.querySelector('ul').appendChild($li);
    
            })    
    }

    mostrarPersonagem(){
        let idPersonagemMostrado = this.sequenciaAleatoria.shift();
        let htmlDados = `
                <div class="div_principal">
                <div class="container caixaPerguntas">
                    <div class="dificuldade ${this.personagens[idPersonagemMostrado].nivel}">${this.personagens[idPersonagemMostrado].nivel}</div>
                    <span class="CodigoDaPergunta h1 mr-3">${this.personagens[idPersonagemMostrado].id}</span><span class="h1 personagem">Personagem:</span><input type="text" class="nomePersonagemInput"><span class="nomePersonagem h2 p-2">${this.personagens[idPersonagemMostrado].personagem}</span>
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
            this.verPersonagem();
            this.proximoPersonagem(); 
            this.tentarVerPersonagem(idPersonagemMostrado);
    }

    verDicas(){
        let $btnsDicas = document.querySelectorAll('.btn_dica');
        $btnsDicas.forEach(dica => {
            dica.addEventListener('click', (e) => {
                e.target.parentNode.querySelector('.dica').classList.add('visible');
                e.target.classList.add('none');
            })
        })
    }

    verPersonagem(){
        const $btnPersonagem = document.querySelector('.verPersonagem');
        const $nomeDoPersonagem = document.querySelector('.nomePersonagem');;
        $btnPersonagem.addEventListener('click', ()=> {
            $nomeDoPersonagem.classList.toggle('visible');
            window.scroll(0, 0);  
            const $inputTentativa = document.querySelector('.nomePersonagemInput');
            $inputTentativa.style.display = 'none';
        })
    }

    proximoPersonagem(){
        let $btnProximo = document.querySelector('.proximo');
        $btnProximo.addEventListener('click', ()=> {
            this.mostrarPlacar();
        })
    }

    mostrarPlacar(){
        const $msgVencedor = document.querySelector('.msgVencedor');
        const $body = document.querySelector('body');
        $msgVencedor.style.display = "block";
        window.scroll(0, 50);
 		$body.classList.add('opacity');

        const $btnProximoPersonagem = document.querySelector('.buttonDivMsg');
        $btnProximoPersonagem.addEventListener('click', ()=> {
            const $inputPlacar = document.querySelectorAll('.inputPlacar');
            let $placar = sessionStorage.getItem('placar');
            $placar = JSON.parse($placar);

            $inputPlacar.forEach(placar => {
                if($placar == placar.value || placar.value > $placar){
                    sessionStorage.setItem('vencedor', JSON.stringify(placar.parentNode.querySelector('p').textContent));
                    window.location.href = "vencedor.html";
                    return;
                }    
            })
           
            $msgVencedor.style.display = "none";
            $body.classList.remove('opacity');
        }) 
        
        this.mostrarPersonagem();
    }

    tentarVerPersonagem(id){
        console.log("tentar ver personagem")
        const $inputTentativa = document.querySelector('.nomePersonagemInput');
        $inputTentativa.addEventListener('keypress', (e)=>{
            if(e.key == "Enter"){
                $inputTentativa.value = $inputTentativa.value.toLowerCase();
                this.personagens[id].personagem = this.personagens[id].personagem.toLowerCase();
                if($inputTentativa.value == this.personagens[id].personagem){
                    $inputTentativa.style.display = 'none';
                    const $nomeDoPersonagem = document.querySelector('.nomePersonagem');;
                    $nomeDoPersonagem.classList.toggle('visible');
                    $nomeDoPersonagem.style.color = "green";
                    setInterval(() => {
                        $nomeDoPersonagem.style.color = "#212529";
                        $nomeDoPersonagem.style.fontWeight = "500";
                    }, 1000)
                    window.scroll(0, 0);  

                }
            }
        });
    }
}