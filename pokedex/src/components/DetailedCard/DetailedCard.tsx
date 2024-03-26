import React from "react";

const DetailedCard = ({ pokemon }: any) => {
  return (
    <div>
      <div>
        <p>Pokemon Number: {pokemon.id}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Pokemon Name: {pokemon.name}</p>
        <p>Pokemon Type: {pokemon.types[0].type.name}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>Description: {}</p>
      </div>
      <div>
        <h3>Stats</h3>
        <p>HP: {pokemon.stats[0].base_stat}</p>
        <p>Attack: {pokemon.stats[1].base_stat}</p>
        <p>Defense: {pokemon.stats[2].base_stat}</p>
        <p>Special Atk: {pokemon.stats[3].base_stat}</p>
        <p>Special Def: {pokemon.stats[4].base_stat}</p>
        <p>Speed: {pokemon.stats[5].base_stat}</p>
      </div>
    </div>
  );
};

export default DetailedCard;
