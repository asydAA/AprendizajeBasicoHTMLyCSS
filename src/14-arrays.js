// Arrays

const notas = ['Nota 1', 'Nota 2', 'Nota 3'];
const numeros = [1, 2, 3, 4, 5, 6];
const mixtos = [1, 'texto', null, true, { id: 1 }];

console.log(notas);
// Crear (Create)
// push()
notas.push('Nota 4');
console.log("push, agrega un elemento al final: ", notas);

// unshift()
notas.unshift('Nota 0');
console.log("unshift, agrega un elemento al inicio: ", notas);

// splice()
notas.splice(1, 0, 'Notas 1.2');
console.log("splice, agrega un elemento en una posición específica: ",notas);

// Leer (Read)
console.log(notas[0]);
console.log(notas[1]);
console.log("cantidad de elementos", notas.length);

// Actualizar (Update)
const notas2 = ['Notas 1', 'Nota 2'];
console.log(notas2);
notas2[1] = 'Nota 3';//actualiza el arreglo
console.log(notas2);

notas2.splice(1,0, 'Nota 4');
console.log(notas2);

// Eliminar (Delete)
const notas3 = ['Nota 1', 'Nota 2'];
console.log("pop, elimina el último elemento del arreglo: ",notas3.pop());
console.log(notas3);

const notas4 = ['Nota 1', 'Nota 2'];
// console.log("shift, elimina el primer elemento del arreglo: ",notas4.shift());
// console.log(notas4);
console.log("splice, elimina un elemento en una posición específica: ",notas4.splice(1,1));
console.log(notas4)