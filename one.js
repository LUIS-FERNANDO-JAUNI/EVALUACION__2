//realiza un programa que permita ingresar el alto y ancho de cuadrilatero y lo imprima en consula en javascript

const ancho = parseInt(prompt("Ingresa el alto del cuadrilatero: "));
const alto = parseInt(prompt("Ingresa el ancho del cuadrilatero: "));

function imprimirCuadrilatero(ancho, alto) {
  let filaSuperior = '';
  for (let i = 0; i < ancho; i++) {
    filaSuperior += '* ';
  }
  console.log(filaSuperior);

  for (let i = 0; i < alto - 2; i++) {
    let filaMedia = '* ';
    for (let j = 0; j < ancho - 2; j++) {
      filaMedia += '  ';
    }
    filaMedia += '*';
    console.log(filaMedia);
  }

  if (alto > 1) {
    let filaInferior = '';
    for (let i = 0; i < ancho; i++) {
      filaInferior += '* ';
    }
    console.log(filaInferior);
  }
}


imprimirCuadrilatero(ancho, alto);