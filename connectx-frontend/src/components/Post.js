// Post.js
import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Post = ({ post, onCommentSubmit }) => {
  const { title, content, user, comments, createdAt } = post;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">
          <small className="text-muted">Posted by {user.username}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">
            {new Date(createdAt).toLocaleString()}
          </small>
        </p>
        <hr />
        <h6>Comments</h6>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <CommentForm
          onSubmit={(commentContent) =>
            onCommentSubmit(post.id, commentContent)
          }
        />
      </div>
    </div>
  );
};

export default Post;
// We create a functional component called Post.
// The component receives a post prop, which should be an object containing title, content, user, comments, and createdAt properties.
// The component also receives an onCommentSubmit prop, which should be a function that gets called when a new comment is submitted.
// We render each post as a Bootstrap card, displaying the title, content, username, timestamp, and comments.
// We use the Comment component to render each comment and the CommentForm component to render the comment form.