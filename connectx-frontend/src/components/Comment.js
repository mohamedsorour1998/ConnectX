import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import api from "./../services/api";

const Comment = ({ comment, postId }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/api/posts/${postId}/comments/${comment._id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.content}
      <Button
        variant="danger"
        size="sm"
        className="float-right"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default Comment;
// Comment.js: This component represents an individual comment,
//  including its content and a button to delete the comment.
//   It receives the comment data as props from the Post.js component and renders the comment
//   information. When the "Delete" button is clicked,
//    it sends a DELETE request to /api/posts/:postId/comments/:commentId
//     using the deleteComment function from the backend API. Once the request is successful,
//      the Post.js component is updated to remove the deleted comment from the list.
