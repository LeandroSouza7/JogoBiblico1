//export class Cronometro{
//	constructor(){
//		this.beginTime();
//	}
//	
//		beginTime(){
//			var body = document.querySelector('body');
//			var iconTempo = document.querySelector('.iconTempo');
//			var cronometro = document.querySelector('.cronometro');
//			var tempoContent = document.querySelector('.cronometro .tempo');
//			var fecharTempo = document.querySelector('.cronometro .fecharTempo');
//			var iniciar = document.querySelector('.cronometro .iniciar');
//			var pausar = document.querySelector('.cronometro .pausar');
//			var parar = document.querySelector('.cronometro .parar');
//
//			iconTempo.addEventListener('click', function(){
//				startTimer(59, tempoContent)
//				cronometro.classList.remove('none');
//			})
//
//			function startTimer(duration, display) {
//				var timer = duration, minutes, seconds;
//				var temporizador = setInterval(function () {
//					minutes = parseInt(timer / 60, 10);
//					seconds = parseInt(timer % 60, 10);
//
//					minutes = minutes < 10 ? "0" + minutes : minutes;
//					seconds = seconds < 10 ? "0" + seconds : seconds;
//
//					display.textContent =  minutes + ":" + seconds;
//
//					if (--timer < 0) {
//						clearInterval(temporizador);
//					}
//				}, 1000);
//
//				iniciar.addEventListener('click', function(){
//					if(seconds !== 0){ 
//						startTimer(seconds, tempoContent)
//					}else{
//						startTimer(60, tempoContent)
//					}
//				})
//
//
//				pausar.addEventListener('click', function(){
//					clearInterval(temporizador);
//				})
//
//				parar.addEventListener('click', function(){
//					clearInterval(temporizador);
//					minutes = 0;
//					seconds = 0;
//					display.textContent =  "00" + ":" + "00";
//				})
//
//
//				fecharTempo.addEventListener('click', function(){
//					clearInterval(temporizador);
//					cronometro.classList.add('none');
//					body.classList.remove('opacityTime');
//				})
//			
//			}
//		}
//}
