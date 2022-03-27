const bola = document.getElementsByClassName('ball');
const rgbColor = document.getElementById('rgb-color');
const aColor = Math.floor(Math.random(bola) * 5);
const paletaCores = document.getElementById('color-palette');
const resposta = document.getElementById('answer');
const codigoCor = document.getElementById('rgb-color');

function criaBolas() {
  for (let i = 0; i < bola.length; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    bola[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
criaBolas();

function picAcolor() {
  const respostaRGB = document.createElement('div');
  respostaRGB.innerText = getComputedStyle(bola[aColor]).backgroundColor;
  rgbColor.appendChild(respostaRGB);
}
picAcolor();

const texto = document.createElement('p');
resposta.appendChild(texto);
texto.innerText = 'Escolha uma cor';

function seleciona(event) {
  const selecionado = getComputedStyle(event.target).backgroundColor;
  if (selecionado === codigoCor.firstElementChild.innerHTML) {
    texto.innerText = 'Acertou';
  } else {
    texto.innerText = 'Errou! Tente novamente!';
  }
}
paletaCores.addEventListener('click', seleciona);

function reset() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

const btn = document.getElementById('reset-game');
btn.addEventListener('click', reset);
