const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/controllers');

// Estas son las rutas de nuestro crud
router.post('/',usuarioController.agregarUsuarios);
router.get('/',usuarioController.buscarUsuarios);
router.get('/:id',usuarioController.buscarUsuariosPorId);
router.put('/:id',usuarioController.editarUsuarios);
router.delete("/:id", usuarioController.eliminarUsuarioPorId);
module.exports = router;