import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getSidebarUsers } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.get("/sidebar", protectRoute, getSidebarUsers);

export default userRoutes;  