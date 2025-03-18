import express from "express";  
import dotenv from "dotenv";  

import initRoutes from "./routes/root.routes.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

initRoutes(app);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));