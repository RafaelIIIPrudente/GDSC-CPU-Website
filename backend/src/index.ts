import express, { Request, Response } from "express";
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
// import database from "./config/database"

//automatically loads environment variables from a . env file into the process. env object.
dotenv.config();

const app = express();

//database sync
// async function testingConnection() {
//   try {
//     await database.sync();
//     console.log('Connected to the Database')
//   } catch {
//     console.log('Did not connect to the database')
//   }
// };
// testingConnection()

//frontend can send requests along with cooking and by including their credentials. 
//cors provides Express middleware to enable CORS with various options
app.use(cors({
  credentials:true,
  origin: 'http://localhost:3000' //domain allowed here is the one we will be using in the frontend
}))

//function so that we can receive data in .json format 
app.use(express.json());

//used to create and manage a session middleware
const SESS_SECRET: string = '21r8y3f4fhjkjefh982y3hri2jfwjkfh3ur83Gd83hd3h'
app.use(session({
  secret: SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: 'auto'
  }
}))

//User router
app.use(userRoute);
app.use(authRoute);

//
app.get('/', (req: Request, res: Response) => {
  console.log("calling the get method, but this is not what we want.")
  res.send("Server is Up")
});

//running the server
const port: number = 5000
app.listen(port, () => {
  console.log("Server is up and Running....."); 
});