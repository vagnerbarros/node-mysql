require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  API_PORT: process.env.API_PORT,
  MySQL: {
    HOST: process.env.HOST,
    USER: process.env.USER,
    DATABASE: process.env.DATA_BASE,
    PASSWORD: process.env.PASSWORD
  },
  JWT: {
    EXPIRACAO_TOKEN: process.env.EXPIRACAO_TOKEN,
    JWT_SECRET: process.env.JWT_SECRET
  }
}