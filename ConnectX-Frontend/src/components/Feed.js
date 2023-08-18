import React, { useState, useEffect } from "react";
import api from "./../services/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import Post from "./Post";
import PostForm from "./PostForm";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get("/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts or no posts found:", error);
    }
  };

  const handleAddPost = () => {
    setSelectedPost(null);
    setShowPostForm(true);
  };

  const handleClosePostForm = () => {
    setShowPostForm(false);
    fetchPosts();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="primary" onClick={handleAddPost}>
            Add Post
          </Button>
        </Col>
      </Row>
      {showPostForm && (
        <PostForm post={selectedPost} onClose={handleClosePostForm} />
      )}
      <Row>
        {posts.map((post) => (
          <Col key={post._id} lg={4} md={6} sm={12}>
            <Post post={post} onDelete={fetchPosts} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Feed;
