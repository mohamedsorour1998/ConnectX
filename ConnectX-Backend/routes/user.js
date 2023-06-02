const express = require("express");
const { getUserProfile, createUserProfile,getAllUsers } = require("../controllers/user");
const requireAuth = require("../middleware/auth");

const router = express.Router();
// get user profile by userId
// router.get("/profile", requireAuth, getUserProfile);
// router.get("/profile", getUserProfile);
router.get("/profile", getAllUsers);

router.post("/register", createUserProfile);

module.exports = router;
