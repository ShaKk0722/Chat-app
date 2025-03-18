const loginUser = (req, res) => {
  console.log("Login route");
  res.send("Login success");
};

const registerUser = (req, res) => {
  console.log("Register route");
  res.send("Register success");
};

const logoutUser = (req, res) => {
  console.log("Logout route");
  res.send("Logout success");
};

export { loginUser, registerUser, logoutUser };