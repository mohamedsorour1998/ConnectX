const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150,
    validate: {
      validator: function (v) {
        return /^[0-9a-zA-Z\s]+$/.test(v);
      },
      message: (props) => `Invalid title format`,
    },
  },
  content: {
    type: String,
    maxlength: 500,
  },
  image: {
    type: String,
  },
  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
