import { createFetch  } from "../createFetch.js";

export class JogoModel{
    constructor(){
    }

    listaPersonagens(){
        return createFetch("GET", "http://localhost:3000/perguntas")
            .then(resposta => resposta);
                // .then(resposta => {
                //     return resposta.forEach(element => {
                //         const $li = document.createElement('li');
                //         const $text = document.createTextNode(element.id + " " + element.personagem);
                //         $li.appendChild($text); 
                //     });
                // });
    }

    pesquisaPersonagemByString(personagemBuscado){
        let qtd = 0;
        personagemBuscado = personagemBuscado.toLowerCase();

        createFetch("GET", "http://localhost:3000/perguntas")
            .then(resposta => {
                resposta.forEach(element =>{
                    if(personagemBuscado == element.personagem){
                        return element;
                    }else{
                        qtd += 1;
                        if(qtd == resposta.length){
                            alert("Personagem não encontrado");
                        } 
                    }
                })
            })
    }

    pesquisaPersonagemById(personagemBuscado){
        let qtd = 0;

        createFetch("GET", "http://localhost:3000/perguntas")
            .then(resposta => {
                resposta.forEach(element =>{
                    personagemBuscado = personagemBuscado.toLowerCase();
                    if(personagemBuscado = resposta.id){
                        return element;
                    }else{
                        qtd += 1;
                        if(qtd == resposta.length){
                            alert("Personagem não encontrado");
                        } 
                    }
                })
            })
    }

    addPersonagens(data, cb){
        createFetch("POST", "http://localhost:3000/perguntas", data)
            .then(resposta => cb(resposta, "Ok"));  
    }

    editPersonagens(data, cb){
        createFetch("PUT", `http://localhost:3000/perguntas/${data.id}`, data)
            .then(resposta => cb(resposta, "Ok"));
    }

    removePersonagens(data, cb){
        createFetch("DELETE", `http://localhost:3000/perguntas/${data.id}`)
            .then(resposta => cb(resposta, "Ok"));
    }

    getNumerosAleatorio(qtdPerguntas){
        let numeros = [];
		let x = 0;
		while(x <= qtdPerguntas){
			let aleatorio = Math.floor(Math.random() * 5)
			if (numeros.indexOf(aleatorio) == -1){
			 	numeros.push(aleatorio);
			}
			
			x++;
		}
		return numeros;
    }

}