
import { Sequelize } from "sequelize";
import dbConfig from "./dbConfig";

const database = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: "mysql"
});

// database.authenticate().then(() => {
//   console.log("Connected to database")
// }).catch(() => {
//   console.log('Cannot Connect')
// });


// const db:any = {};
// db.database = database;
// db.models = {};
// db.models.Users = require('./userModel')(database, Sequelize.Datatypes)

export default database;

