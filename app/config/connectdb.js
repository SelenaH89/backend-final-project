const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

async function connectdb() {
  try {
    await sequelize.authenticate();
    console.log('Database connected👍.');
    return Promise.resolve();
  } catch (e) {
    console.error('Connection failed👎:', e.stack);
    return Promise.reject(e);
  }
}

module.exports = {
  connectdb,
  sequelize,
};
