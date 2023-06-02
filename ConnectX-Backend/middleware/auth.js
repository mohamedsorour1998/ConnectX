const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid token, authorization denied" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token, authorization denied" });
  }
};
