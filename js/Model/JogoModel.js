import { createFetch  } from "../createFetch";

export class JogoModel{
    constructor(){
    }

    listaPersonagens(){
        return createFetch("GET", "http://localhost:3000/perguntas")
                .then(response => {
                    response.forEach(element => {
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
            .then(response => {
                response.forEach(element =>{
                    personagemBuscado = personagemBuscado.toLowerCase();
                    if(personagemBuscado = response.personagem){
                        return element;
                    }else{
                        qtd += 1;
                        if(qtd == response.length){
                            alert("Personagem não encontrado");
                        } 
                    }
                })
            })
    }

    addPersonagens(){

    }

    editPersonagens(){
        
    }

    removePersonagens(){

    }

}