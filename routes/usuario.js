const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/UsuarioController')
const auth = require('../middlewares/auth')

//Metodos
router.post('/add', usuarioController.add);
//router.get('/list', auth.verificarAdministrador, usuarioController.list);
//router.get('/list', auth.verificarUsuario, usuarioController.list);
router.get('/list',  usuarioController.list);
router.put('/update', usuarioController.update);
router.put('/enabled', usuarioController.enabled);
router.put('/disabled', usuarioController.disabled);

router.post('/login', usuarioController.login);

module.exports = router;