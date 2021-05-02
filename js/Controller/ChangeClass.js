export class ChangeClass{
	constructor($btn){
		this.$btn = $btn;
		this.i = 0;
		while(this.$btn[this.i]){
			this.$btn[this.i].addEventListener('click', this.putClass)
			this.i++;
		}
	}
	
	putClass(){	
		var paiElement = this.parentNode;
		let childElement = paiElement.querySelector('.dica');
		childElement.classList.toggle('visible');
		this.classList.add('none');
	}
}