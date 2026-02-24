const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;
console.log('Tentando conectar ao banco...');
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API rodando na porta ${PORT}`);
  
  });
}).catch(err => {
  console.error('Erro ao conectar com o banco:', err);
});

