import{ NumeroAleatorio } from './NumeroAleatorio.js'
export class Pergunta extends NumeroAleatorio{
	constructor(codigoDaPergunta, numer){
		super();
		this.numbers = numer;
		this.codigoDaPergunta = codigoDaPergunta;
	
		this.configClasses();

	
		}

	
	configClasses(){
		this.numberFirst = this.numbers.shift();
		if(this.numberFirst === undefined){
			alert('Acabou o jogo');
		}
		this.perguntaEscolhida = this.codigoDaPergunta[this.numberFirst];
		this.perguntaEscolhida.parentNode.classList.remove('naoAtual');
		this.perguntaEscolhida.parentNode.classList.add('atual');
	}

	
}