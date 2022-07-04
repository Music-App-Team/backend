import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import playlistRoute from "./routes/playlist.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

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
  .connect("mongodb://localhost:27017/musicApp")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.error(err));
