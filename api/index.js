const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute");

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

app.use("/api/user", userRoutes);
