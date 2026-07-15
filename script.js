let titulo= document.getElementById("titulo");
let canvas = document.getElementById("matrix");
let ctx = canvas.getContext("2d");
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

let colunaLargura = 20;
let numColunas = Math.floor(canvas.width / colunaLargura);
let gotas = new Array(numColunas).fill(0);

function desenhar() {
  // 1. Pinta um retângulo preto semi-transparente por cima de tudo
  //    (isso cria o efeito de "rastro" que desaparece aos poucos)
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Configura a cor e fonte das letras
  ctx.fillStyle = "#0F0"; // verde
  ctx.font = "16px monospace";

  // 3. Pra cada coluna, desenha uma letra e desce a posição
  for (let i = 0; i < gotas.length; i++) {
    let letra = String.fromCharCode(33 + Math.random() * 94); // caractere aleatório
    let x = i * colunaLargura;
    let y = gotas[i] * 20; // cada "passo" desce 20px

    ctx.fillText(letra, x, y);

    // se passou do fim da tela, volta pro topo (às vezes, aleatoriamente)
    if (y > canvas.height && Math.random() > 0.975) {
      gotas[i] = 0;
    }

    gotas[i]++;
  }
}

setInterval(desenhar, 50);

let mensagens= [
  "SYSTEM ONLINE",
  "LOADING...",
  "ACCESS GRANTED",
  "CONNECTING...",
  "INITIALIZING...",
  "WELCOME USER"

];

let indice= 0;

titulo.textContent=mensagens[indice];

setInterval(() => {
indice++;


if (indice >= mensagens.length) {
    indice=0;

}

titulo.textContent = mensagens[indice];

}, 3000);
