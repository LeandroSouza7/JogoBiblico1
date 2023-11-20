import { JogoController } from "../Controller/JogoController.js";

export class EditView{
    constructor(){
        this.jogoController = new JogoController();

        this.$resultados = document.querySelector('.resultados');

        // this.$inputBusca.focus();

        this.personagensEncontrados = []

        this.carregarPersonagens();
        this.pesquisarPersonagem();
    }

    carregarPersonagens(){
        this.$resultados.innerHTML = "";
        if(this.personagensEncontrados == ""){
            this.jogoController.lista()
                .then(resposta => {
                    this.$resultados.innerHTML = "";
                    resposta.forEach(personagem => {
                        const $li = document.createElement('li');
                        const $textLi = document.createTextNode(personagem.id + " " + personagem.personagem);
                        $li.appendChild($textLi); 

                        const $btnEditPersonagem = document.createElement('button');
                        $btnEditPersonagem.classList.add('editPersona');
                        $btnEditPersonagem.setAttribute('value', personagem.id)
                        const $textButton = document.createTextNode('Editar personagem');
                        $btnEditPersonagem.appendChild($textButton);

                        $li.appendChild($btnEditPersonagem);
                        this.$resultados.appendChild($li);

                        // this.apagarPersonagens();
                    })
                })
        }else{
            this.personagensEncontrados.forEach(element =>{
                const $li = document.createElement('li');
                const $textLi = document.createTextNode(element.id + " " + element.personagem);
                $li.appendChild($textLi); 

                const $btnEditPersonagem = document.createElement('button');
                $btnEditPersonagem.classList.add('removePersona');
                $btnEditPersonagem.setAttribute('value', element.id)
                const $textButton = document.createTextNode('Apagar personagem');
                $btnEditPersonagem.appendChild($textButton);

                $li.appendChild($btnEditPersonagem);
                this.$resultados.appendChild($li);

                // this.apagarPersonagens();
            })
        }
    } 

    pesquisarPersonagem(){
        const $btnPersonagem = document.querySelector('.btnPersonagem');
        const $btnId = document.querySelector('.btnId');

        $btnPersonagem.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            let $valuePersonagemBtn = document.querySelector('.buscaPersonagem').value;
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if($valuePersonagemBtn == element.personagem){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens();
                            this.voltarTelaParaTodosOsPersonagens();
                            document.querySelector('.buscaPersonagem').value = "";
                        }else{
                            qtd += 1;
                            if(qtd == resposta.length){
                                alert("Personagem não encontrado");
                            } 
                        }
                    })
                })
        })

        $btnId.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            let $valuePersonagemId = document.querySelector('.buscaId').value;
            this.jogoController.lista()
                .then(resposta => {
                    let qtd = 0;
                    resposta.forEach(element =>{
                        if($valuePersonagemId == element.id){
                            this.personagensEncontrados.push(element);
                            this.carregarPersonagens();
                            this.voltarTelaParaTodosOsPersonagens();
                            document.querySelector('.buscaId').value = "";
                        }else{
                            qtd += 1;
                            if(qtd == resposta.length){
                                alert("Personagem não encontrado");
                            } 
                        }
                    })
                })
        })

    }

    voltarTelaParaTodosOsPersonagens(){
        const $btnVoltarTela = document.querySelector('.btnVoltarTela')
        $btnVoltarTela.style = 'display: block;';

        $btnVoltarTela.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            this.carregarPersonagens();
            $btnVoltarTela.style = "display: none;";
        })
    }

    editarPersonagens(){
        let $inputsTextArea = document.querySelectorAll('textarea');
        let dataArray = [];
        $inputsTextArea.forEach(input, ()=>{
                if(input.value === ""){
                    alert("Preencha todos os campos");
                    return;
                }

                dataArray.push(input.value);               
        })

        let _dataArray = {"nivel": dataArray[0], "personagem": dataArray[1], "dicaUm": dataArray[2], "dicaDois": dataArray[3], "dicaTres": dataArray[4], "dicaQuatro": dataArray[5], "dicaCinco": dataArray[6], "dicaSeis": dataArray[7], "dicaSete": dataArray[8], "dicaOito": dataArray[9], "dicaNove": dataArray[10], "dicaDez": dataArray[11], "id": el[12]};
                            console.log(_valores);

        this.jogoController.edit(`http://localhost:3000/perguntas/${_dataArray.id}`, _valores)
                .then(response => alert("Deu certo"));

    }
}