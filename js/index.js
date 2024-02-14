const tela = document.querySelector(".tela");

const criaCobrinha = () => {
    const cobrinha = tela.getContext("2d");
    cobrinha.beginPath();
    cobrinha.fillStyle = 'white';
    cobrinha.arc(10,10,10,0,4*3.14);
    cobrinha.fill(); 
}
criaCobrinha();