const { Produto, Categoria } = require('../models');

class ProdutoController {

  async index(req, res) {
    const produtos = await Produto.findAll({
      include: Categoria
    });
    return res.json(produtos);
  }

  async show(req, res) {
    const produto = await Produto.findByPk(req.params.id, {
      include: Categoria
    });

    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    return res.json(produto);
  }

  async store(req, res) {
    const produto = await Produto.create(req.body);
    return res.status(201).json(produto);
  }
}

module.exports = new ProdutoController();
