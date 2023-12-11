export class VencedorView{
    constructor(){
        this.mostrarVencedor();
    }

    mostrarVencedor(){
        let $placar = sessionStorage.getItem('placar');
        $placar = JSON.parse($placar);

        let $vencedor = sessionStorage.getItem('vencedor');
        $vencedor = JSON.parse($vencedor);
        console.log($vencedor);

    }
}