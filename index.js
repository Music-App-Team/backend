import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import playlistRoute from "./routes/playlist.route.js";
import userRoutes from "./routes/user.route.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", authRoute);
app.use("/playlist", playlistRoute);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("app listen to port " + process.env.PORT);
});

mongoose
  .connect(process.env.MONGO_DB_CONNECTION)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.error(err));
