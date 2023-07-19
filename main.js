//variaveis
const screen1 = document.querySelector(".card-close");
const screen2 = document.querySelector(".card-opened");
const mensagem = document.querySelector(".mensagem");

//random (pseudorandom)
let randomNumber = Math.round(Math.random() * 10);
switch (randomNumber) {
  case 1:
    mensagem.innerText =
      "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.";
    break;
  default:
    mensagem.innerText =
      "Desculpe, acabaram nossas mensagens, voce esta sem sorte.";
}

function abrirbiscoito() {
  toggleScreen();
}
function abrirOutro() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
