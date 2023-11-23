require("dotenv").config();

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_TEST_PORT,
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    logging: false,
    models: ["../**/*.model.ts"],
    define: {
      timestamps: true,
      underscored: true
    }
  }
};