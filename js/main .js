import { NumeroAleatorio } from './Model/NumeroAleatorio.js';
import { Pergunta } from './Model/Pergunta.js';
import { ChangeClass } from './Controller/ChangeClass.js';
import { ChangeClassNamePersonagem } from './Controller/ChangeClassNamePersonagem.js';
import { MsgVencedor } from './View/MsgVencedor.js';
//import {Cronometro} from './Controller/Cronometro.js';

var $players = document.querySelectorAll('.inputPlayers');
var $comecar = document.querySelector('.comecar');
var $codigoDaPergunta = document.querySelectorAll('.CodigoDaPergunta');
var $lengthCodigoPergunta = $codigoDaPergunta.length;
var $btn = document.querySelectorAll('.btn_dica');
var $msgDiv = document.querySelector('.msgVencedor');
var $msgVencedorUl = document.querySelector('.msgVencedorUl');
var $buttonDivMsg = document.querySelector('.buttonDivMsg');
var $msgVencedor = document.querySelector('.msgVencedor');
var $msgVencedorDivParagrafos = document.querySelector('.msgVencedorDivParagrafos')
var $caixaPerguntas = document.querySelectorAll('.caixaPerguntas');
var $paragrafoCaixa = document.querySelector('.msgVencedor .jogadores');
var $body = document.querySelector('body');
var divPrincipal = document.querySelector('.div_principal');
//var $cronometro = new Cronometro();




function getNumberAleatorio(){
	var numeros = [];
	var x = 0;
	while(x <= 1000){
		var aleatorio = Math.floor(Math.random() * $lengthCodigoPergunta)
		if (numeros.indexOf(aleatorio) == -1){
			numeros.push(aleatorio);
		}
			
		x++;
	}
	
	return numeros;
}

var numberAleatorio = getNumberAleatorio();
var arrNumberAleatorioVazio = [];
var arrNumberAleatorioConcat = arrNumberAleatorioVazio.concat(numberAleatorio);
console.log(arrNumberAleatorioConcat);


var numeroAleatorio = new NumeroAleatorio($lengthCodigoPergunta);
var pergunta = new Pergunta($codigoDaPergunta, arrNumberAleatorioConcat);
var changeClass = new ChangeClass($btn);
var changeClassNamePersonagem = new ChangeClassNamePersonagem();
var msgVencedor = new MsgVencedor(pergunta, $msgVencedor);


$buttonDivMsg.addEventListener('click', btnDivMsg)

function btnDivMsg(){
	var x = 0;
	while($codigoDaPergunta[x]){
		let numberClass = $caixaPerguntas[x].getAttribute('class').lastIndexOf(" ");
		var classe = $caixaPerguntas[x].getAttribute('class').slice(numberClass);
		if($caixaPerguntas[x].getAttribute('class').slice(numberClass) === ' atual'){
			$caixaPerguntas[x].classList.add('jaFoi');
		}
				x++;
	}
	var n = new Pergunta($codigoDaPergunta, arrNumberAleatorioConcat);
	$msgVencedor.style.display = 'none';
	$body.classList.remove('opacity');
	window.scroll(0, 0);
}


$comecar.addEventListener('click', jogar)

function jogar(){
	  var a = [];
	  $players.forEach(function(e) {
		  if ( e.value != "" )
		  a.push(e.value);
	  });
	
	var divPlayers = document.querySelector('.msgVencedorDivUl');
	var x = 0;
	while(a[x]){
		var text = document.createTextNode(a[x])
		var li = document.createElement('li');
		$msgVencedorUl.appendChild(li);		
		li.appendChild(text);
		
		var input = document.createElement('input');
		li.appendChild(input);
		input.setAttribute('type', 'number');
		input.classList.add('inputMsgVencedor');
		input.addEventListener('input', function(){
			if(this.value === '15'){
				anunciarVencedor(this);
			}
		})
		x++;
	}
		

	let inputsParticipantes = document.querySelector('.inputsParticipantes');
	inputsParticipantes .style.display = 'none';
	divPrincipal.classList.remove('none');
	window.scroll(0, 0);
}

function anunciarVencedor(value){
	var winner = value.parentNode;

	var endGame = document.querySelector('.endGame');
	var winnerPlayer = document.querySelector('.endGame .winner');

	winnerPlayer.textContent = winner.textContent;
	endGame.classList.remove('none');

	divPrincipal.classList.add('none');
	$msgVencedor.parentNode.removeChild($msgVencedor);

}
