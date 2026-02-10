const app = require('./app');
const { sequelize } = require('./models');

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('🚀 API rodando em http://localhost:3000');
  });
});
