import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import api from "./../services/api";

const PostForm = ({ post, onClose }) => {
  const [title, setTitle] = React.useState(post ? post.title : "");
  const [content, setContent] = React.useState(post ? post.content : "");
  const [image, setImage] = React.useState(post ? post.image : "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = { title, content, image };

    try {
      if (post) {
        await api.put(`/api/posts/${post._id}`, postData);
      } else {
        await api.post("/api/posts/", postData);
      }
      onClose();
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{post ? "Edit Post" : "Add Post"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL (optional)</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {post ? "Update Post" : "Create Post"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PostForm;
// PostForm.js: This component displays a form for creating a new post or updating an existing one.
//  When the "Add Post" button is clicked in the Feed.js component, a PostForm component is displayed,
//  allowing the user to enter the post's title and content. Upon submission,
//  the form data is sent to either the /api/posts endpoint (for creating new posts) or
//   the /api/posts/:postId endpoint (for updating existing posts), depending on the current form mode
//   (create or edit). Once the request is successful, the form is closed,
//    and the Feed.js component is updated to reflect the changes.
