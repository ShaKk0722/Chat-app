const registerUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, sex } = req.body;
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