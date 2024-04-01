import {
  StyledPokemonDetailedCardContainer,
  StyledLeftSideCard,
  StyledRightSideCard,
  StyledDescription,
  StyledStatsDetails,
  StyledPokemonTypeCardLeftSide,
  StyledPokemonNameCardLeftSide,
  StyledStatsAtkDefSpeed,
} from "./styledDetailedCard";

import { PokemonBackgroundColor } from "./styledDetailedCard";

interface Pokemon {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: PokemonBackgroundColor } }[];
  stats: { base_stat: number }[];
}

interface DetailedCardProps {
  pokemon: Pokemon;
}

const DetailedCard = ({ pokemon }: DetailedCardProps) => {
  return (
    <StyledPokemonDetailedCardContainer>
      <StyledLeftSideCard>
        <div>
          <p>{"#" + pokemon.id}</p>
        </div>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <StyledPokemonNameCardLeftSide>
            {pokemon.name}
          </StyledPokemonNameCardLeftSide>
          <StyledPokemonTypeCardLeftSide
            color={pokemon.types[0].type.name as PokemonBackgroundColor}
          >
            {pokemon.types[0].type.name}
          </StyledPokemonTypeCardLeftSide>
        </div>
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
          <StyledStatsAtkDefSpeed>
            <p>Special Atk: {pokemon.stats[3].base_stat}</p>
            <p>Special Def: {pokemon.stats[4].base_stat}</p>
            <p>Speed: {pokemon.stats[5].base_stat}</p>
          </StyledStatsAtkDefSpeed>
        </StyledStatsDetails>
      </StyledRightSideCard>
    </StyledPokemonDetailedCardContainer>
  );
};

export default DetailedCard;
