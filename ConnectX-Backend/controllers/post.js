const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("userId", "username");
  res.status(200).json(posts);
};

exports.getPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId).populate("userId", "username");
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
};

exports.createPost = async (req, res) => {
  const { title, content, image } = req.body;
  const userId = req.userId;

  console.log("Request body:", req.body);

  try {
    const post = new Post({ userId, title, content, image });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content, image } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      postId,
      { title, content, image },
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    await Post.findByIdAndDelete(postId);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
};

exports.addComment = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  const userId = req.userId;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.comments.push({ content, userId });
    await post.save();
    res.status(201).json(post.comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateComment = async (req, res) => {
  const { postId, commentId } = req.params;
  const { content } = req.body;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comment = post.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    comment.content = content;
    await post.save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comment = post.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    post.comments.pull(commentId); // Use pull method to remove the comment
    await post.save();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
