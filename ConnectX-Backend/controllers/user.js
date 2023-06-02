const User = require("../models/User");

exports.createUserProfile = async (req, res) => {
  const { username, password, firstName, lastName, email, profileImage, bio } =
    req.body;

  try {
    const user = new User({
      username,
      password,
      firstName,
      lastName,
      email,
      profileImage,
      bio,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
