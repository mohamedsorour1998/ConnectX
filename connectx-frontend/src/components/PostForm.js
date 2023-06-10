// PostForm.js
import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          className="form-control"
          id="content"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!title.trim() || !content.trim()}
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
// We create a functional component called PostForm.
// The component receives an onSubmit prop, which should be a function that gets called when the form is submitted.
// We use the useState hook to manage the form's title and content state.
// We define a handleSubmit function that gets called when the form is submitted. It prevents the default form submission behavior, checks if the title and content are not empty, and then calls the onSubmit prop function with the title and content. After that, it clears the title and content state.
// We render a form with an input field for the title and a textarea for the content, as well as a submit button. We use the onChange event on the input and textarea to update the state, and the disabled attribute on the button to make it disabled when the title or content is empty
