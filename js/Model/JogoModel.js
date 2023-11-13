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

    editPersonagens(data, cb){
        createFetch("PUT", `http://localhost:3000/perguntas/${data.id}`, data)
            .then(resposta => cb(resposta, "Ok"));
    }

    removePersonagens(data){
        return createFetch("DELETE", `http://localhost:3000/perguntas/${data}`)
            .then(resposta => resposta);
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