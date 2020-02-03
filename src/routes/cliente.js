const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');
const validation = require('../validation');
const verificarToken = require('../util/verificarToken');

router.get('/clientes', verificarToken, validation.cliente.listar, controller.cliente.listar);

module.exports = router;