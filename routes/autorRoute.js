const { Router } = require('express');

const controller = require('../controllers/autorController');

const router = Router();

router.get('/', controller.getAllAutor);
router.get('/books/:name/:surname', controller.getAllBookFromAutor);

module.exports = router;
