const { Router } = require('express');

const controller = require('../controllers/userController');

const router = Router();

router.get('/getUserId/:id', controller.getUsuarioById);
router.get('/getUserEmail/:email', controller.getUserByEmail);
router.get('/', controller.getAllUser);

router.post('/postUser', controller.createUser);

router.delete('/deletedUser/:id', controller.deleteUser);

router.patch('/updateUser/:id', controller.updateUser);


module.exports = router;
