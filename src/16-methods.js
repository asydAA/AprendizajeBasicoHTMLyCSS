// Métodos de orden superior

// Map()
const notas = [
  { id: 1, title: 'Nota 1', content: 'Contenido uno' },
  { id: 2, title: 'Nota 2', content: 'Contenido dos' },
  { id: 3, title: 'Nota 3', content: 'Contenido tres' },
];

const titulos = notas.map((nota) => nota.title);
console.log(titulos);

const notaConFecha = notas.map((nota) => ({
  ...nota,
  fechaCreacion: Date.now()
}));
console.log(notaConFecha);

// Filter()
const notas2 = [
  { id: 1, title: 'Nota 1', content: 'Contenido uno', esFavorita: true, },
  { id: 2, title: 'Nota 2', content: 'Contenido dos', esFavorita: false, },
  { id: 3, title: 'Nota 3', content: 'Contenido tres', esFavorita: true, },
];

const favoritas = notas2.filter((nota) => nota.esFavorita);
console.log(favoritas);
const titulo = notas2.filter((nota) => nota.title.toLocaleLowerCase().includes('nota 4'));
console.log(titulo);


// find()
const notas3 = [
  { id: 1, title: 'Nota 1', content: 'Contenido uno', esFavorita: true, },
  { id: 2, title: 'Nota 2', content: 'Contenido dos', esFavorita: false, },
  { id: 3, title: 'Nota 3', content: 'Contenido tres', esFavorita: true, },
];
const nota = notas3.find((nota) => nota.id === 3);
console.log(nota);

// reduce()
const numeros = [1,2,3,4,5,6,7];
const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma);