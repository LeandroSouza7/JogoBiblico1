import { createFetch  } from "../createFetch.js";

export class JogoModel{
    constructor(){
    }

    listaPersonagens(){
        return createFetch("GET", "http://localhost:3000/perguntas")
            .then(resposta => resposta);
    }

    addPersonagens(data){
        return createFetch("POST", "http://localhost:3000/perguntas", data)
            .then(resposta => resposta);  
    }

    editPersonagens(data){
        return createFetch("PUT", `http://localhost:3000/perguntas/${data.id}`, data)
            .then(resposta => resposta);
    }

    removePersonagens(data){
        return createFetch("DELETE", `http://localhost:3000/perguntas/${data}`)
            .then(resposta => resposta);
    }

    getNumerosAleatorio(qtdPerguntas){
        let numeros = [];
		let x = 0;
		while(x <= 100000){
			let aleatorio = Math.floor(Math.random() * qtdPerguntas)
			if (numeros.indexOf(aleatorio) == -1){
			 	numeros.push(aleatorio);
			}
			
			x++;
		}
		return numeros;
    }

}