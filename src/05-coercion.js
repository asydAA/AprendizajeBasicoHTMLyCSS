// Coerción Implícita

console.log('5' + 3);
console.log('5' - 3);
console.log(true + 1);


// Conversión Explicita

const str = '42';
const num = Number(str);
console.log(typeof num, num);

const int = parseInt(str, 10);
console.log(int);

const float = parseFloat('3.1415');
console.log(float);

const texto = String(123);
console.log(typeof texto);

const bool = Boolean(1);
console.log(bool);