// Switch

switch (expresion) {
  case valor1:
    // Código ...
    break;
  case valor2:
    // Código...
    break;
  default:
  // Código...
}

const dia = 'lunes';

switch (dia) {
  case 'lunes':
    console.log('Hoy es lunes...');
    break
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('Día Laboral');
    break;
  case 'sabado':
  case 'domingo':
    console.log('Fin de semana');
    break;
  default:
    console.log('Día no válido');
}