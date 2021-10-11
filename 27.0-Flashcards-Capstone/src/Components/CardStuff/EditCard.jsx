import React, { useState, useEffect } from "react";
import CardForm from "./CardForm";
import { useParams, Link } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";

const EditCard = () => {
  const [deck, setDeck] = useState({ cards: [] });
  const [card, setCard] = useState([]);
  const { deckId, cardId } = useParams();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
    // eslint-disable-next-line
  }, [deckId, cardId]);

  const handleSubmit = (card) => {
    updateCard(card.id)
  };

  const child = card.id ? (
    <CardForm deck={deck} 
    card={card} 
    setCard={setCard}
    handleSubmit={handleSubmit}/>
  ) : (
    <p>Loading...</p>
  )

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <i class="bi bi-house-door-fill"></i> Home
            </Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Edit Card {card.id}
          </li>
        </ol>
      </nav>

      <h2>Edit Card</h2>
      {child}
      
    </div>
  );
};

export default EditCard;
