const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/post");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router.get("/", requireAuth, getPosts);
router.get("/:postId", requireAuth, getPostById);
router.post("/", requireAuth, createPost);
router.put("/:postId", requireAuth, updatePost);
router.delete("/:postId", requireAuth, deletePost);

router.post("/:postId/comments", requireAuth, addComment);
router.put("/:postId/comments/:commentId", requireAuth, updateComment);
router.delete("/:postId/comments/:commentId", requireAuth, deleteComment);

module.exports = router;
