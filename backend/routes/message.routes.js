import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messagesRoutes = express.Router();

messagesRoutes.post("/send/:userId", protectRoute, sendMessage);
messagesRoutes.get("/get/:userId", protectRoute, getMessages);

export default messagesRoutes;  