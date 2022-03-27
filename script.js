function randomColors() {
  const color = ['rgb(0, 0, 0)'];
  const colors = document.getElementsByClassName('ball');
  for (let i = 0; i < 5; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    color.push(`rgb(${r}, ${g}, ${b})`);
  }
  for (let z = 0; z < colors.length; z += 1) {
    colors[z].style.backgroundColor = color[z];
  }
}

randomColors();
