const tela = document.querySelector(".tela");
const pincel = tela.getContext("2d");

pincel.beginPath();
pincel.fillStyle = 'black';
pincel.arc(10,26,4,0,2*3.14);
pincel.fill(); 
pincel.beginPath();
pincel.fillStyle = 'black';
pincel.arc(10,34,4,0,2*3.14);
pincel.fill(); 
