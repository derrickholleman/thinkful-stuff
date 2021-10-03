import React, { useState, useEffect } from "react";
import PokemonDisplay from "./PokemonDisplay";

const PokemonFetch = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const pokemonIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "pikachu", "magmar"];

  useEffect(() => {
    setLoading(true);
    async function getPokemon(ids) {
      await Promise.all(
        ids.map(async (id) => {
          const pokemonRes = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

          const pokemonJSON = (await pokemonRes).json();
          return pokemonJSON;
        })
      ).then((res) => setPokemon(res));
      setLoading(false)
    }
    getPokemon(pokemonIDs);
  }, []);

  return (
    <div>
      {pokemon.map((mon) => (
        <PokemonDisplay key={mon.id} pokemon={mon} />
      ))}

      {loading && <p>Loading Pokemon...</p>}
    </div>
  );
};

export default PokemonFetch;
