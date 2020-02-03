const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');
const validation = require('../validation');

//Login do usuário na api
router.post('/auth', validation.auth.auth, controller.auth.login);

module.exports = router;