import React from "react";

import {
  StyledPokemonDetailedCardContainer,
  StyledLeftSideCard,
  StyledRightSideCard,
  StyledDescription,
  StyledStatsDetails,
} from "./styledDetailedCard";

const DetailedCard = ({ pokemon }: any) => {
  return (
    <StyledPokemonDetailedCardContainer>
      <StyledLeftSideCard>
        <p>
          {"#"}
          {pokemon.id}
        </p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p> {pokemon.name}</p>
        <p> {pokemon.types[0].type.name}</p>
      </StyledLeftSideCard>
      <StyledRightSideCard>
        <StyledDescription>
          <h3>Description</h3>
          <p>Description: {}</p>
        </StyledDescription>
        <StyledStatsDetails>
          <div>
            <h3>Stats</h3>
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats[1].base_stat}</p>
            <p>Defense: {pokemon.stats[2].base_stat}</p>
          </div>
          <div>
            <br></br>
            <br></br>
            <p>Special Atk: {pokemon.stats[3].base_stat}</p>
            <p>Special Def: {pokemon.stats[4].base_stat}</p>
            <p>Speed: {pokemon.stats[5].base_stat}</p>
          </div>
        </StyledStatsDetails>
      </StyledRightSideCard>
    </StyledPokemonDetailedCardContainer>
  );
};

export default DetailedCard;
