import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/login", loginUser);
authRoutes.post("/register", registerUser);
authRoutes.post("/logout", logoutUser);


export default authRoutes;  