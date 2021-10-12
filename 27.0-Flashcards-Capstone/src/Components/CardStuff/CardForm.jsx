import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CardForm = ({ handleSubmit, card, setCard }) => {
  const initNewCard = {
    front: "",
    back: "",
  };
  const [newCard, setNewCard] = useState({ ...initNewCard });
  const { deckId } = useParams()

  console.log(card)

  const onSubmit = (e) => {
    e.preventDefault();
    if (!card.id) {
      handleSubmit(newCard);
      console.log('submitted new card')
    } else {
      handleSubmit(card);
      console.log('submitted updated card')
    }

    setNewCard({ ...initNewCard });
  };

  const handleChange = (e) => {
    if (!card.id) {
      setNewCard({ ...newCard, [e.target.id]: e.target.value });
    } else {
      setCard({ ...card, [e.target.id]: e.target.value });
    }
  };

  if (!card) {
    return null
  }

  return (
    <div>
      {/* form to create new card */}
      {!card.id && (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              type="text"
              class="form-control"
              id="front"
              placeholder="Front Side of Card"
              value={newCard.front}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="back">Back</label>
            <textarea
              type="text"
              class="form-control"
              id="back"
              placeholder="Back Side of Card"
              value={newCard.back}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-deck-btns">
            <Link to={`/decks/${deckId}`}>
              <button className="btn btn-secondary">Done</button>
            </Link>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      )}

      {/* form to edit existing card */}
      {card.id && (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              type="text"
              class="form-control"
              id="front"
              placeholder="Front Side of Card"
              value={card.front}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="back">Back</label>
            <textarea
              type="text"
              class="form-control"
              id="back"
              placeholder="Back Side of Card"
              value={card.back}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-deck-btns">
            <Link to={`/decks/${deckId}`}>
              <button className="btn btn-secondary">Done</button>
            </Link>
            <Link to={`/decks/${deckId}`}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginLeft: ".5rem" }}
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default CardForm;
