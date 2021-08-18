var cartas = [];
var descarte = [];
var concluido;
// sistema para preencher o array inicial usando caixa de diálogo
total = parseInt(prompt('imforme total'));
for (i = total; i > 0; i--) {
  cartas.push(i);
}
//while responsavel pela disposicao dos numeros nos respectivos arrays descarte/restante
while (cartas.length > 1) {
  descarte.push(cartas.pop());
  if (cartas.length > 1) {
    cartas.unshift(cartas.pop());
    continue;    
  }
  alert('cartas descartadas: ' + descarte.join(", ") + '\ncartas restantes: ' + cartas);
  concluido =
    'cartas descartadas: ' +
    descarte.join(", ") +
    '<br>cartas restantes: ' +
    cartas +
    '<br>====================================';
    
}
/*while (total > 0) {
  break;
}*/
document.getElementById('exemplo').innerHTML = concluido;
