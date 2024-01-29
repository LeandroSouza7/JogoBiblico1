export class VencedorView{
    constructor(){
        this.mostrarVencedor();
    }

    mostrarVencedor(){
        let $placar = sessionStorage.getItem('placar');
        $placar = JSON.parse($placar);

        let $vencedor = sessionStorage.getItem('vencedor');
        $vencedor = JSON.parse($vencedor);

        let endGame = document.querySelector('.endGame');
        let winnerPlayer = document.querySelector('.endGame .winner');

        winnerPlayer.textContent = $vencedor;
        endGame.classList.remove('none');

        this.jogarNovamente();

    }

    jogarNovamente(){
        let $jogarNovamente = document.querySelector('.jogarNovamente');

        $jogarNovamente.addEventListener('click', ()=> {
            window.location.href = "index.html";
        })
    }
}