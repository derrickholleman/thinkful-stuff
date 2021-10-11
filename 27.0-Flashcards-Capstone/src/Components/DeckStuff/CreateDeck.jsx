import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import "./CreateDeck.css";

const CreateDeck = () => {
  const initNewDeck = {
    name: "",
    description: "",
  };
  const [newDeck, setNewDeck] = useState({ ...initNewDeck });
  const history = useHistory();

  const handleSubmit = (newDeck) => {
    createDeck(newDeck).then((newDeck) => history.push(`/decks/${newDeck.id}`));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(newDeck);
    setNewDeck({ ...initNewDeck });
  };

  const handleChange = (e) => {
    setNewDeck({ ...newDeck, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <h1>Create Deck</h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Deck Name"
            value={newDeck.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            placeholder="Brief description of the deck"
            value={newDeck.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-deck-btns">
          <Link to="/">
            <button className="btn btn-secondary">Cancel</button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDeck;
