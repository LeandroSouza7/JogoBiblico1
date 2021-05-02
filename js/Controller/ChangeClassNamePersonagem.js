export class ChangeClassNamePersonagem {
	constructor(){
//		this.perguntaEscolhida = pergunta.perguntaEscolhida;
//		this.pergunatParentNode = this.perguntaEscolhida.parentNode;
		let verPersonagem = document.querySelectorAll('.verPersonagem');
		var x = 0;
		while(x <= 31){
			verPersonagem[x].addEventListener('click', this.changeClassNamePersonagem);
			x++;
		}
	}
	
	changeClassNamePersonagem(){
		let paiElementPersonagem = this.parentNode;
		this.nomeDoPersonagem = paiElementPersonagem.querySelector('.nomePersonagem');
		this.nomeDoPersonagem.classList.toggle('visible');
		window.scroll(0, 0);
	}
	
}