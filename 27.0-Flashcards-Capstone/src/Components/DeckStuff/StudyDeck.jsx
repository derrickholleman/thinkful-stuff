import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import "./StudyDeck.css";

const StudyDeck = () => {
  const [deck, setDeck] = useState({cards: []});
  const [currentCardNumber, setCurrentCardNumber] = useState(1);
  const [cardSide, setCardSide] = useState("front");
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    // eslint-disable-next-line
  }, [deckId]);

  const handleNext = () => {
    setCurrentCardNumber((currentCardNumber) => currentCardNumber + 1);
    setCardSide("front");

    if (currentCardNumber === deck.cards.length && cardSide === "back") {
      const goBackToHomePage = !window.confirm(
        "Restart cards?\n\nClick 'cancel' to return to the home page"
      );

      if (goBackToHomePage) {
        history.push("/");
      } else {
        setCurrentCardNumber(1);
        setCardSide("front");
      }
    }
  };

  const card = deck.cards[currentCardNumber - 1];

  if (!deck.id) {
    return <p>Loading...</p>;
  }

  if (deck.cards.length >= 2) {
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
              <Link to={`/decks/${deckId}`}>Rendering In React</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>

        <h1>{deck.name}: Study</h1>

        <div className="deck-container">
          <h5>
            Card {currentCardNumber} of {deck.cards.length}
          </h5>
          {cardSide === "front" && <p>{card.front}</p>}
          {cardSide === "back" && <p>{card.back}</p>}
          <button
            className="btn btn-secondary flip-btn"
            onClick={() => setCardSide("back")}
          >
            Flip
          </button>
          {cardSide === "back" && (
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
  
  /* if not enough cards, render this */
  return (
    <div>
      <h1>{deck.name}: Study</h1>
      <h3>Not enough cards</h3>
      <p>
        You need at least 3 cards to study. There are {deck.cards.length} cards
        in this deck.
      </p>
      <Link to={`/decks/${deck.id}/cards/new`}>
        <button className="btn btn-primary">
          <i class="bi bi-plus-lg"></i> Add Cards
        </button>
      </Link>
    </div>
  );
};

export default StudyDeck;
