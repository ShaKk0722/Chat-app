import express from "express";  
import dotenv from "dotenv";  
dotenv.config();

import initRoutes from "./routes/root.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";

console.log("MONGODB_URI:", MONGODB_URI);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json()); // Middleware to parse JSON bodies
initRoutes(app);


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});