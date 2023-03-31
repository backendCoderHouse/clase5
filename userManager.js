const fs = require('fs');
const crypto = require('crypto');

class UserManager {
  constructor() {
    try {
      const usuariosString = fs.readFileSync('Usuarios.json');
      this.usuarios = JSON.parse(usuariosString);
    } catch (error) {
      console.log('No se pudo leer el archivo de usuarios', error);
      this.usuarios = [];
    }
  }

  crearUsuario(usuario) {
    const hash = crypto.createHash('sha256');
    const contraseñaHasheada = hash.update(usuario.Contraseña).digest('hex');
    const nuevoUsuario = {
      Nombre: usuario.Nombre,
      Apellido: usuario.Apellido,
      'Nombre de usuario': usuario['Nombre de usuario'],
      Contraseña: contraseñaHasheada,
    };
    this.usuarios.push(nuevoUsuario);
    const usuariosString = JSON.stringify(this.usuarios);
    fs.writeFileSync('Usuarios.json', usuariosString);
  }

  validarUsuario(nombreUsuario, contraseña) {
    const usuario = this.usuarios.find((usuario) => usuario['Nombre de usuario'] === nombreUsuario);
    if (!usuario) {
      return 'El usuario no existe';
    }
    const hash = crypto.createHash('sha256');
    const contraseñaHasheada = hash.update(contraseña).digest('hex');
    if (contraseñaHasheada === usuario.Contraseña) {
        console.log('Logueado');;
    } else {
     console.log('Contraseña incorrecta');
    }
  }
}

module.exports = UserManager;
