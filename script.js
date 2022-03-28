/* eslint-disable no-restricted-globals */
const bola = document.getElementsByClassName('ball');
const rgbColor = document.getElementById('rgb-color');
const aColor = Math.floor(Math.random(bola) * 5);
const paletaCores = document.getElementById('color-palette');
const resposta = document.getElementById('answer');
const codigoCor = document.getElementById('rgb-color');
const respostaRGB = document.createElement('div');
rgbColor.appendChild(respostaRGB);

function criaBolas() {
  for (let i = 0; i < bola.length; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    bola[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  respostaRGB.innerText = getComputedStyle(bola[aColor]).backgroundColor;
}
criaBolas();

function textoShow(event) {
  const selecionado = getComputedStyle(event.target).backgroundColor;
  console.log(selecionado);
  if (selecionado === codigoCor.firstElementChild.innerHTML) {
    resposta.innerText = 'Acertou!';
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  }
}
paletaCores.addEventListener('click', textoShow);

function reset() {
  resposta.innerText = 'Escolha uma cor';
  criaBolas();
}

const btn = document.getElementById('reset-game');
btn.addEventListener('click', reset);
