import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", router);

app.use("/api/auth", authRoutes);

//error middleware
app.use((err, req, res, next) => {

  const statusCode= err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({success:false,
    statusCode,
    message})

})