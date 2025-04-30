import path from "path";
import express from "express";  

import dotenv from "dotenv";  
dotenv.config();

import initRoutes from "./routes/root.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve(); // Get the current directory path
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";


app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies
initRoutes(app);
app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from the public directory
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html")); // Serve the index.html file for all other routes
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});