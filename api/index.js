import express from "express";
import mongoose from "mongoose";
//import { mongoose } from 'mongoose';
import dotenv from "dotenv";

import authRoute from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const port = 3000;
mongoose
  .connect(process.env.MONGO)
  .then((x) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error while connecting to db", error);
  });
app.listen(3000, () => {
  console.log(`server is running on  ${port}`);
});
app.use(express.json());

app.use("/api/auth", authRoute);


// customize middleware to send the error response to every controller using next()
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    errorMessage,
  });
});
