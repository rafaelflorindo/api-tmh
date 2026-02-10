const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = express.Router();

router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.show);
router.post('/produtos', ProdutoController.store);

module.exports = router;
