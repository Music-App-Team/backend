import { Router } from "express";
import authRoute from "./auth.route.js";
import playlistRoute from "./playlist.route.js";
import userRoutes from "./user.route.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/playlist", playlistRoute);
router.use("/user", userRoutes);

export default router;
