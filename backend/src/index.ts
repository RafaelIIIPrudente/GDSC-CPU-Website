import express from "express";
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import userRoute from "./routes/userRoute";

//automatically loads environment variables from a . env file into the process. env object.
dotenv.config();


const app = express();

//frontend can send requests along with cooking and by including their credentials
app.use(cors({
  credentials:true,
  origin: 'http://localhost:3000' //domain allowed here is the one we will be using in the frontend
}))

//function so that we can receive data in .json format 
app.use(express.json());

//used to create and manage a session middleware
app.use(session({
  secret: '',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: 'auto'
  }
}))

//User router
app.use(userRoute)

app.get('/', (req, res) => {
  res.send("Hello");
})

// app.listen(process.env.APP_PORT, () => {
//   console.log("HEHE"); 
// });