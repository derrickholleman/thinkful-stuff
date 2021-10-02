import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ createPost }) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(content);
    setContent("");
  };

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>

        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            required={true}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>

        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea
              id="content"
              name="content"
              required={true}
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          )}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
