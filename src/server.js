const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API rodando na porta ${PORT}`);
  });
});

/*const app = require('./app');
const { sequelize } = require('./models');

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('🚀 API rodando em http://localhost:3000');
  });
});

*/
