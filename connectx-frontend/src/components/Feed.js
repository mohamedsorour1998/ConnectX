import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import api from "../services/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleAddPost = () => {
    // Navigate to the post creation form
    navigate("/create-post");
  };

  const handleDeleteLatestPost = () => {
    // Delete the latest created post and update the state
    // For example:
    api.delete(`/posts/${posts[0].id}`).then(() => setPosts(posts.slice(1)));
  };

  const handleCommentSubmit = (postId, commentContent) => {
    // Submit the new comment to your API here and update the state
    // For example:
    api
      .post(`/posts/${postId}/comments`, { content: commentContent })
      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, response.data] }
            : post
        );
        setPosts(updatedPosts);
      });
  };

  return (
    <div>
      <h1 className="mb-4">Feed</h1>
      <div className="d-flex mb-4">
        <button className="btn btn-primary mr-2" onClick={handleAddPost}>
          Add Post
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDeleteLatestPost}
          disabled={posts.length === 0}
        >
          Delete Latest Post
        </button>
      </div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onCommentSubmit={handleCommentSubmit}
          />
        ))
      )}
    </div>
  );
};

export default Feed;
