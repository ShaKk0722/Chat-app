import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try { 
    console.log("Register route");
    const { fullName, username, password, confirmPassword, sex } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const url_boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}$`
    const url_girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}$`

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      sex,
      profilePicture: sex === "male" ? url_boyProfilePic : url_girlProfilePic,
    });

    if (newUser) {
      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePicture,
      })
    } else {
      res.status(400).json({ error: "Error creating user" });
    }
  
  } catch (error) {
    console.error("Error in registerUser:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

};

const loginUser = async (req, res) => {
  try {
    console.log("Login route");
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordMatch = await bcrypt.compare(password, user?.password || "");
    if (!isPasswordMatch || !user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.error("Error in loginUser:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const logoutUser =  (req, res) => {
  console.log("Logout route");
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "development",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logoutUser:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { loginUser, registerUser, logoutUser };