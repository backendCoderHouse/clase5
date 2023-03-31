const UserManager = require('./UserManager');

const userManager = new UserManager();

const nombreUsuario = 'jperez';
const contraseña = 'miContraseñanoSegura';

const mensajeValidacion = userManager.validarUsuario(nombreUsuario, contraseña);