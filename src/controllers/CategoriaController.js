const { Categoria, Produto } = require('../models');

class CategoriaController {

  async index(req, res) {
    const categorias = await Categoria.findAll();
    return res.json(categorias);
  }

  async produtos(req, res) {
    const categoria = await Categoria.findByPk(req.params.id, {
      include: Produto
    });

    if (!categoria) {
      return res.status(404).json({ erro: 'Categoria não encontrada' });
    }

    return res.json(categoria.Produtos);
  }

  async store(req, res) {
    const categoria = await Categoria.create(req.body);
    return res.status(201).json(categoria);
  }

}

module.exports = new CategoriaController();
