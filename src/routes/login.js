const express = require('express');
const loginContoller = require('../controllers/loginController');

const router = express.Router();

router.get('/login', loginContoller.login);
router.get('/register', loginContoller.register);

module.exports = router;
