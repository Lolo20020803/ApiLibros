const { Router } = require('express');

const controller = require('../controllers/bookController');

const router = Router();

router.get('/', controller.getAllBooks);
router.get('/bookId/:id', controller.getBookById);
router.get('/bookAuthor/:title', controller.getAutorInBook);

module.exports = router;
