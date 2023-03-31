const UserManager = require('./UserManager');

const userManager = new UserManager();

const nuevoUsuario = {
  Nombre: 'Juan',
  Apellido: 'Pérez',
  'Nombre de usuario': 'jperez',
  Contraseña: 'miContraseñaSegura',
};

userManager.crearUsuario(nuevoUsuario);




