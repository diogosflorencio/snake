const tela = document.querySelector(".tela");

// botoes
const cima = document.querySelector(".cima");
const direta = document.querySelector(".direita");
const esquerda = document.querySelector(".esquerda");
const baixo = document.querySelector(".baixo");


// quadro 
let tamanho = 20;
let linhas = 15;
let colunas = 20;
let quadro = tela;
let contexto;

// cobra 
let cobraX = tamanho;
let cobraY = tamanho;

let velocidadeX = 0;
let velocidadeY = 0;

let cobraCorpo = []

let gamerover = false;

// comida 
let comidaX;
let comidaY;
let comidas = 0;

window.onload = () => {
    quadro.height = linhas * tamanho;
    quadro.width = colunas * tamanho;
    contexto = quadro.getContext("2d");
    comidaAleatoria();
    document.addEventListener("keyup", movimentaCobrinhaSetas)
    criaCobrinha();
    setInterval(criaCobrinha, 1600/10) 
}
const criaCobrinha = (param) => {
    if(gamerover){
        return false;
    }

    contexto.fillStyle = "black";
    contexto.fillRect(0, 0, quadro.width, quadro.height);

    contexto.beginPath();
    contexto.fillStyle = 'red';
    contexto.arc(comidaX, comidaY,tamanho/2,0,2*3.14);
    contexto.fill();  

    // contexto.fillStyle = "red";
    // contexto.fillRect(comidaX, comidaY, tamanho, tamanho);

    if(cobraX == comidaX && cobraY == comidaY){
        cobraCorpo.push([comidaX, comidaY]);
        comidaAleatoria();
        comidas++;
    }
    contexto.font = "30px Arial";
    contexto.fillText(comidas, 10, 35);

    for (let i = cobraCorpo.length -1; i > 0; i--){
        cobraCorpo[i] = cobraCorpo[i-1];
    }
    if (cobraCorpo.length){
        cobraCorpo[0] = [cobraX, cobraY];
    }

    // contexto.fillStyle = "lime";
    cobraX += velocidadeX * tamanho;
    cobraY += velocidadeY * tamanho;

    contexto.beginPath();
    contexto.fillStyle = 'green';
    contexto.arc(cobraX, cobraY,tamanho/2,0,2*3.14);
    contexto.fill();  

    // contexto.fillRect(cobraX, cobraY, tamanho, tamanho);

    for (let i = 0; i < cobraCorpo.length; i++){
        // contexto.fillRect(cobraCorpo[i][0], cobraCorpo[i][1], tamanho, tamanho)
        contexto.beginPath();
        contexto.arc(cobraCorpo[i][0], cobraCorpo[i][1],tamanho/2,0,2*3.14);
        contexto.fill();  
    }
    
    //fim do jogo

    if(cobraX < 0 || cobraX > colunas*tamanho || cobraY < 0 || cobraY > colunas*tamanho){
        gamerover = true;
        alert("Fim do jogo!")
        location.reload() 
    }

}
 
function comidaAleatoria(){
    comidaX = Math.floor(Math.random()*colunas)*tamanho;
    comidaY = Math.floor(Math.random()*linhas)*tamanho;
    console.log(comidaX)
}

const movimentaCobrinhaSetas = (param) => {
    if(param.code == "ArrowUp" && velocidadeY != 1){
        velocidadeX = 0;
        velocidadeY = -1;
    }
    if(param.code == "ArrowDown" && velocidadeY != -1){
        velocidadeX = 0;
        velocidadeY = 1;
    }
    if(param.code == "ArrowLeft" && velocidadeX != 1){
        velocidadeX = -1; 
        velocidadeY = 0;
    }
    if(param.code == "ArrowRight" && velocidadeX != -1){
        velocidadeX = 1;
        velocidadeY = 0;
    }
}
const movimentaCobrinhaBotoes = (param) => {
    if(param == "cima" && velocidadeY != 1){
        velocidadeX = 0;
        velocidadeY = -1;
    }
    if(param == "baixo" && velocidadeY != -1){
        velocidadeX = 0;
        velocidadeY = 1;
    }
    if(param == "esquerda" && velocidadeX != 1){
        velocidadeX = -1; 
        velocidadeY = 0;
    }
    if(param == "direita" && velocidadeX != -1){
        velocidadeX = 1;
        velocidadeY = 0;
    }
}
cima.addEventListener("click", () => movimentaCobrinhaBotoes("cima"));
direta.addEventListener("click", () => movimentaCobrinhaBotoes("direita"));
esquerda.addEventListener("click", () => movimentaCobrinhaBotoes("esquerda"));
baixo.addEventListener("click", () =>movimentaCobrinhaBotoes("baixo")); 