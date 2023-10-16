import { createFetch  } from "../createFetch";

export class JogoModel{
    constructor(){
    }

    listaPersonagens(){
        return createFetch("GET", "http://localhost:3000/perguntas")
                .then(resposta => {
                    resposta.forEach(element => {
                        const $li = document.createElement('li');
                        const $text = document.createTextNode(element.id + " " + element.personagem);
                        $li.appendChild($text); 
                    });
                });
    }

    pesquisaPersonagemByString(personagemBuscado){
        if(typeof personagemBuscado != 'string'){
            alert("Personagem deve ser uma string");

            return;
        }

        let qtd = 0;

        createFetch("GET", "http://localhost:3000/perguntas")
            .then(resposta => {
                resposta.forEach(element =>{
                    personagemBuscado = personagemBuscado.toLowerCase();
                    if(personagemBuscado = resposta.personagem){
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

}