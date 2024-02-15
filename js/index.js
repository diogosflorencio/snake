const tela = document.querySelector(".tela");

// botoes
const cima = document.querySelector(".cima");
const direta = document.querySelector(".direita");
const esquerda = document.querySelector(".esquerda");
const baixo = document.querySelector(".baixo");

const criaCobrinha = (param) => {
    let x = 175
    let y = 175
    let tamanho = 1
    setInterval(()=>{
        for (let index = 0; index <  tamanho; index++) {
            const cobrinha = tela.getContext("2d");
            cobrinha.beginPath();
            cobrinha.fillStyle = 'white'; 
            cobrinha.arc(x,y-=20,10,0,4*3.14);
            cobrinha.fill();   
        }
    },1000) 
}
const movimentaCobrinha = (param) => {
    if(param == "cima"){
        criaCobrinha("cima")
    }
}
cima.addEventListener("click", () => movimentaCobrinha("cima"));
direta.addEventListener("click", () => movimentaCobrinha("direta"));
esquerda.addEventListener("click", () => movimentaCobrinha("esquerda"));
baixo.addEventListener("click", () =>movimentaCobrinha("baixo"));