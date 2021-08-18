var cartas = [];

var descarte = [];

total = parseInt(prompt('imforme total'));
for (i = total; i > 0; i--) {
  cartas.push(i);
}
while (cartas.length > 1) {
  descarte.push(cartas.pop());
  if (cartas.lengtht > 1) {
    cartas.unshift(cartas.pop());
  }
  alert('cartas descartadas: ' + descarte + '\ncartas restantes: ' + cartas);
  cartas = [];
  descarte = [];
  while (total > 0);
}
