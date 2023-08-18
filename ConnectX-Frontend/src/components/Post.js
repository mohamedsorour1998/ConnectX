import React from "react";
import { Card, Button } from "react-bootstrap";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import api from "./../services/api";

const Post = ({ post, onDelete }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/api/posts/${post._id}`);
      onDelete(); // Call the onDelete function (fetchPosts) from the parent component
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        {post.image && (
          <Card.Img variant="bottom" src={post.image} alt="Post Image" />
        )}
        <Card.Text className="mt-3">Comments:</Card.Text>
        {post.comments.map((comment) => (
          <Comment key={comment._id} comment={comment} postId={post._id} />
        ))}
        <CommentForm postId={post._id} />
        <Button
          variant="danger"
          className="mt-3"
          onClick={handleDelete}
        >
          Delete Post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;

// Post.js: This component represents an individual post, including its title, content, 
// and a list of associated comments. It receives the post data as props from the Feed.js component
//  and renders the post information. Additionally, it renders a Comment component for each comment associated 
//  with the post,
//  as well as a CommentForm component to allow users to add new comments.