// Function

function saludar(nombre) {
  return `Hola, ${nombre}\n`;
}

const mensaje = saludar('Oscar');
const mensaje2 = saludar('Felipe');
console.log(mensaje, mensaje2);


// Parámetros / Argumentos

function crearUsuario(nombre, edad) {
  // ...
  return { nombre, edad };
}

const usuario = crearUsuario('Ana', 25);

console.log(usuario);


// Arrow Functions

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5));


const crearNota = (contenido, titulo = 'Sin Titulo') => {
  return {
    titulo,
    contenido,
    creado: Date.now()
  }
}

const nota1 = crearNota('Mi contenido');
const nota2 = crearNota('Otro contenido', 'Mi Nota');

console.log(nota1);
console.log(nota2);