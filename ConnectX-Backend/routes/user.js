const express = require("express");
const { getUserProfile, createUserProfile } = require("../controllers/user");
const requireAuth = require("../middleware/auth");

const router = express.Router();
router.get("/profile", requireAuth, getUserProfile);

router.post("/register", createUserProfile);

module.exports = router;
