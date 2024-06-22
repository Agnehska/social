import express from "express";
import 'dotenv/config';
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useCreateIndex: true,
  useFindANdModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log(err.reason));

app.get('/', async (req, res) => {
  try {
    res.status(500).send('Hello')
  } catch (err) {
    console.log(err);
  }
  
})

app.listen(port, () => {
  console.log('app is running')
})
