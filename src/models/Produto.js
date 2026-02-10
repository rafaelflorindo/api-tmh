module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: DataTypes.TEXT,
      preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      imagem: DataTypes.STRING,
      link_externo: DataTypes.STRING
    });
  
    return Produto;
  };
  