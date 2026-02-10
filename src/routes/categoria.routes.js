const express = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const router = express.Router();

router.get('/categorias', CategoriaController.index);
router.post('/categorias', CategoriaController.store);
router.get('/categorias/:id/produtos', CategoriaController.produtos);

module.exports = router;
