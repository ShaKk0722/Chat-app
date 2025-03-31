import User from "../models/user.model.js";

const getSidebarUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filterUsers);

    } catch (error) {
        console.error("Error in getSidebarUsers:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export { getSidebarUsers };