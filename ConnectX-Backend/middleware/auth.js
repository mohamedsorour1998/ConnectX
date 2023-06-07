const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  // Split the "Authorization" header value
  const tokenParts = authHeader.split(" ");

  // Check if the header value has two parts and the first part is "Bearer"
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res
      .status(401)
      .json({ error: "Invalid token format, authorization denied" });
  }

  // Get the token part
  const token = tokenParts[1];

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
