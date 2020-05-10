const express = require('express');
const controller = require('../../controller/normalController/userNormalCon')
const router = express.Router();

router.get('/', controller.landing)
router.get('/register', controller.register);
router.get('/login', controller.login);


module.exports = router;
