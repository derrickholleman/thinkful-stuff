import React, { useState } from "react";

function PostCreate({ createPost }) {
  const [type, setType] = useState("Text");
  const [textContent, setTextContent] = useState("");
  const [imageContent, setImageContent] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({textContent, imageContent});
    setTextContent('');
    setImageContent('')
  };

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
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              value={imageContent}
              onChange={(e) => setImageContent(e.target.value)}
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
