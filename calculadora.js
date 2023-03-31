const moment = require('moment');

// variable que almacena la fecha actual
const fechaActual = moment();

// variable que almacena la fecha de tu nacimiento
const fechaNacimiento = moment('1990-01-01', 'YYYY-MM-DD');

// validación de la fecha de nacimiento
if (fechaNacimiento.isValid()) {
  // cálculo de los días desde el nacimiento hasta la fecha actual
  const diasTranscurridos = fechaActual.diff(fechaNacimiento, 'days');
  console.log(`Han transcurrido ${diasTranscurridos} días desde mi nacimiento hasta hoy.`);
} else {
  console.log('La fecha de nacimiento no es válida.');
}
