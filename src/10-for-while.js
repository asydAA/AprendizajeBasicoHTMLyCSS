// For/While
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const notas = ['Nota 1', 'Nota 2', 'Nota 3'];

for (let i = 0; i < notas.length; i++) {
  console.log(`Indice ${i}: ${notas[i]}`);
}

// For of
const frutas = ['manzana', 'pera', 'uva'];

for (const fruta of frutas) {
  console.log(fruta);
  if (fruta === 'manzana') {
    console.log('Es una rica Manzana');
  }
}

// For in
const persona = { nombre: 'Ana', edad: 25 };

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

// While

let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}

// Do While

let numero = 0;

do {
  console.log(`Entra en: ${numero}`);
  numero++;
} while (numero < 3) {
  console.log(numero);
}