const Sequelize = require('sequelize')

import dbConfig from "./dbConfig";

const database = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT
});


const db:any = {};
db.database = database;
db.models = {};
db.models.Users = require('./userModel')(database, Sequelize.Datatypes)

export default database;

