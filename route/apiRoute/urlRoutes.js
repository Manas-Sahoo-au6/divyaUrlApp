const express = require('express');
const controller = require('../../controller/apiController/urlCon');
const middleware = require('../../middleware/authentication');
const router = express.Router()


router.get('/urlShortner', middleware, controller.check)
router.post('/Shortner', middleware, controller.shortner)
router.get('/:short', controller.getShortWork)

module.exports = router