import express from "express";
import 'dotenv/config';
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from './routers/authRouter.js';

const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

app.use('/api', authRouter)

const start = async () => {
  try {
    await mongoose.connect(url)
    app.listen(port, () => console.log(`server started on port ${port}`))
  } catch (e) {
    console.log(e)
  }
}

start()