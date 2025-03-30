import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try { 
    console.log("Register route");
    const { fullName, username, password, confirmPassword, sex } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match");
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).send("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const url_boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}$`
    const url_girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}$`

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      sex,
      profilePic: sex === "male" ? url_boyProfilePic : url_girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      })
    } else {
        res.status(400).send("Error creating user");
    }
  
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).send("Internal Server Error");
  }

};

const loginUser = (req, res) => {
  console.log("Login route");
  res.send("Login success");
};


const logoutUser = (req, res) => {
  console.log("Logout route");
  res.send("Logout success");
};

export { loginUser, registerUser, logoutUser };