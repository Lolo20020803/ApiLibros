const { Router } = require('express');

const controller = require('../controllers/autorController');

const router = Router();

router.get('/', controller.getAllAutor);

module.exports = router;
