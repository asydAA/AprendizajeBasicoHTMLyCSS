// Strings

const nombre = 'JavaScript';
const version = 'ES6';

// console.log(nombre, version);

const mensaje = 'Bienvenido a ' + nombre + ' version: ' + version;
// console.log(mensaje);


// Template literals

const mensaje2 = `Bienvenido y Bienvenida a el curso de ${nombre}, en su versión: ${version}`;
console.log(mensaje2);

// Expresiones

const precio = 100;
const cantidad = 3;
const total = `Total: ${precio * cantidad}`;
console.log(typeof total);

// Miltilínea

const nota = `
# Mi Nota
Este es el contenido

- Nota 1
- Nota 2
`;

// Métodos principales en Strings

// Length

const texto = 'Hola Mundo';
console.log(texto.length);

// Slice(inicio, fin)

const texto1 = "JavaScript es Genial";
console.log(texto1.slice(0,10));
console.log(texto1.slice(11));
console.log(texto1.slice(-6));


// Substring(inicio, fin)
const texto2 = "Hola Mundo";
console.log(texto2.substring(0,4));


// Split(separador)
const texto3 = 'línea1,línea2,línea3';
const lineas = texto3.split(',');
console.log(lineas);

//  trim(), trimStart(), trimEnd()

const texto4 = '   Hola Mundo   ';
console.log(texto4.trim()); // "Hola Mundo"
console.log(texto4.trimStart()); // "Hola Mundo   "
console.log(texto4.trimEnd()); // "   Hola Mundo"

// toLowerCase() - toUpperCase()

const texto5 = 'JavaScript';
console.log(texto5.toLowerCase()); // "javascript"
console.log(texto5.toUpperCase()); // "JAVASCRIPT"

// includes(subcadena)

const contenido = 'Aprende JavaScript desde cero';
console.log(contenido.includes('JavaScript')); // true
console.log(contenido.includes('Python')); // false


// startsWith() - endsWith()

const archivo = 'documento.md';
console.log(archivo.startsWith('doc')); // true
console.log(archivo.endsWith('.js')); // true


// `replace()` y `replaceAll()`

const texto6 = 'Hola Mundo, Hola JavaScript';
console.log(texto6.replace('Hola', 'Hi')); // "Hi Mundo, Hola JavaScript"
console.log(texto6.replaceAll('Hola', 'Hi')); // "Hi Mundo, Hi JavaScript"
console.log(texto6);