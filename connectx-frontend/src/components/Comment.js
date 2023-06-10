// Comment.js
import React from 'react';

const Comment = ({ comment }) => {
  const { user, content, createdAt } = comment;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">
          <small className="text-muted">
            {new Date(createdAt).toLocaleString()}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Comment;