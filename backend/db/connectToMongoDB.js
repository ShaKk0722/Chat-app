import mongoose from "mongoose";
import dotenv from "dotenv";  

dotenv.config();
const connectToMongoDB = async () => {
    try {
        console.log("Connecting to MongoDB...", process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB successfully!");
    }   catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;