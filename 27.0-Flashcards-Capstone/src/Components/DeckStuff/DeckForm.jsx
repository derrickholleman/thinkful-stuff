import React, { useState } from "react";
import { Link } from "react-router-dom";

const DeckForm = ({ handleSubmit, deck, setDeck }) => {
  const initNewDeck = {
    name: "",
    description: "",
  };
  const [newDeck, setNewDeck] = useState({ ...initNewDeck });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!deck) {
      handleSubmit(newDeck);
    } else {
      handleSubmit(deck)
    }
    
    setNewDeck({ ...initNewDeck });
  };

  const handleChange = (e) => {
    if (!deck) {
      setNewDeck({ ...newDeck, [e.target.id]: e.target.value });
    } else {
      setDeck({ ...deck, [e.target.id]: e.target.value });
    }
  };

  return (
    <div>
      {/* form to create new deck */}
      {!deck && (
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
      )}

      {/* form to edit existing deck */}
      {deck && (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Deck Name"
              value={deck.name}
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
              value={deck.description}
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
      )}
    </div>
  );
};

export default DeckForm;
