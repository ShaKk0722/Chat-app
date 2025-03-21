import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/login", loginUser);
router.get("/register", registerUser);
router.get("/logout", logoutUser);


export default router;  