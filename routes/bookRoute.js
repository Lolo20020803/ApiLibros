const { Router } = require('express');

const controller = require('../controllers/bookController');

const router = Router();

router.get('/', controller.getAllBooks);

module.exports = router;
