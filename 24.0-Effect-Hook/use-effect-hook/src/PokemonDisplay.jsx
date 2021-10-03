import React from "react";

const PokemonDisplay = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <p>Pokemon weight: {pokemon.weight}lbs</p>
      <ul style={{ listStyle: "none" }}>
        {pokemon.moves
          .map((move, index) => <li key={index}>{move.move.name}</li>)
          .slice(0, 5)}
      </ul>
    </div>
  );
};

export default PokemonDisplay;
