const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { username, password, firstName, lastName, email } = req.body;

  try {
    const user = new User({ username, password, firstName, lastName, email });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
