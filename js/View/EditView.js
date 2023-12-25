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
                        const $p = document.createElement('p');
                        const $textP = document.createTextNode(personagem.id + " " + personagem.personagem);
                        $p.appendChild($textP); 
                        $li.appendChild($p); 

                        const $btnEditPersonagem = document.createElement('button');
                        $btnEditPersonagem.classList.add('editPersona');
                        $btnEditPersonagem.setAttribute('value', personagem.id)
                        const $textButton = document.createTextNode('Editar personagem');
                        $btnEditPersonagem.appendChild($textButton);

                        $li.appendChild($btnEditPersonagem);
                        this.$resultados.appendChild($li);

                        this.btnEditarPersonagens();
                    })
                })
        }else{
            this.personagensEncontrados.forEach(element =>{
                const $li = document.createElement('li');
                const $p = document.createElement('p');
                const $textP = document.createTextNode(element.id + " " + element.personagem);
                $p.appendChild($textP); 
                $li.appendChild($p); 

                const $btnEditPersonagem = document.createElement('button');
                $btnEditPersonagem.classList.add('editPersona');
                $btnEditPersonagem.setAttribute('value', element.id)
                const $textButton = document.createTextNode('Editar personagem');
                $btnEditPersonagem.appendChild($textButton);

                $li.appendChild($btnEditPersonagem);
                this.$resultados.appendChild($li);

                this.btnEditarPersonagens();
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
        console.log('chegou aqui')
        const $btnVoltarTela = document.querySelector('.btnVoltarTela')
        $btnVoltarTela.style = 'display: block;';

        $btnVoltarTela.addEventListener('click', ()=>{
            this.personagensEncontrados = [];
            this.carregarPersonagens();
            $btnVoltarTela.style = "display: none;";
        })
    }

    btnEditarPersonagens(){
        let $btnEdit = document.querySelectorAll('.editPersona');
        $btnEdit.forEach(btn => {
            btn.addEventListener('click', (e)=> {
                this.telaEditarPersonagens(e);
            })
        })
    }

    telaEditarPersonagens(e){
        let personagemEditar = e.target.getAttribute("value");
        personagemEditar = parseFloat(personagemEditar);
        this.jogoController.lista()
            .then(resposta => {
                resposta.forEach(personagem => {
                    if(personagem.id == personagemEditar){
                        console.log(personagem.nivel)
                        let levelPergunta = personagem.nivel;
                        levelPergunta = levelPergunta.toLowerCase();
                        let _level = undefined;

                        switch(levelPergunta){
                            case "fácil":
                                _level = "easy";
                                break;
                            case "médio":
                                _level = "medium";
                                break;
                            case "difícil":
                                _level = "hard";
                                break;
                            default:
                                alert("Alguma coisa deu errado com o nível da pergunta");  
                        }

                        this.$resultados.innerHTML = ` 
                        <div class="container caixaPerguntas">
                        <div class="dificuldade ${_level}"><textarea>${personagem.nivel}</textarea></div>
                        <span class="CodigoDaPergunta h1 mr-3">0${personagem.id}</span><span class="h1 personagem">Personagem:</span><span class="h2 p-2"><textarea>${personagem.personagem}</textarea></span>
                        <div class="dicasPersonagens">
                            <div class="metade1">
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">1</span><span class="dica"><textarea>${personagem.dicaUm}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">2</span><span class="dica"><textarea>${personagem.dicaDois}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">3</span><span class="dica"><textarea>${personagem.dicaTres}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">4</span><span class="dica"><textarea>${personagem.dicaQuatro}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">5</span><span class="dica"><textarea>${personagem.dicaCinco}</textarea></span></div>
                                </div>
                                <br>
                            </div>
                            
                            <div class="metade2">
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">6</span><span class="dica"><textarea>${personagem.dicaSeis}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">7</span><span class="dica"><textarea>${personagem.dicaSete}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">8</span><span class="dica"><textarea>${personagem.dicaOito}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">9</span><span class="dica"><textarea>${personagem.dicaNove}</textarea></span></div>
                                </div>
                                <br>
                                <div class="divPai">
                                    <div class="divDicas"><span class="mr-2 ml-1 number">10</span><span class="dica"><textarea>${personagem.dicaDez}</textarea></span></div>
                                </div>
                                <br>
                        </div>	
                        </div>
                                <span class="btn proximo mb-5">Atualizar</span>
                        </div>`;

                        this.voltarTelaParaTodosOsPersonagens();
                        this.editarPersonagens(personagem.id);
                    }
                })
            })
    }

    editarPersonagens(id){
        let $btnAtualizar = document.querySelector('.proximo');
        $btnAtualizar.addEventListener('click', ()=>{
            let $inputsTextArea = document.querySelectorAll('textarea');
            let dataArray = [];
            $inputsTextArea.forEach(input => {
                    if(input.value === ""){
                        alert("Preencha todos os campos");
                        return;
                    }

                    dataArray.push(input.value);               
            })

            let _dataArray = {"nivel": dataArray[0], "personagem": dataArray[1], "dicaUm": dataArray[2], "dicaDois": dataArray[3], "dicaTres": dataArray[4], "dicaQuatro": dataArray[5], "dicaCinco": dataArray[6], "dicaSeis": dataArray[7], "dicaSete": dataArray[8], "dicaOito": dataArray[9], "dicaNove": dataArray[10], "dicaDez": dataArray[11], "id": id};

            this.jogoController.edit(_dataArray)
                    .then(response => alert("Deu certo"));

        });
    }
}