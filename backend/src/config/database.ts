
import { Sequelize } from "sequelize";
import dbConfig from "./dbConfig";

const database = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: "mysql"
});

export default database;

