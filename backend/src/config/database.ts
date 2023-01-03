//imports 
import { Sequelize } from "sequelize";
import dbConfig from "./dbConfig";

//An Object Relational Mapper performs functions like handling database records by representing the data as objects.
//this is used for the connnection of database
const database = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: "mysql"
});

export default database;

