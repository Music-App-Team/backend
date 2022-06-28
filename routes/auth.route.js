import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";

const router = Router();

router.post("/login",AuthController.login);
router.post("/signup", AuthController.signup);

export default router;

