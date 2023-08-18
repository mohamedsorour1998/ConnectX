import React from "react";
import { Form, Button } from "react-bootstrap";
import api from "./../services/api";

const CommentForm = ({ postId }) => {
  const [content, setContent] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentData = { content };

    try {
      await api.post(`/api/posts/${postId}/comments`, commentData);
      setContent("");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group controlId="content">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Comment
      </Button>
    </Form>
  );
};

export default CommentForm;
