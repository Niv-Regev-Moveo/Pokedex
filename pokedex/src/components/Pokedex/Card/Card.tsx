import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  StyledCardTop,
  StyledImage,
  StyledPokemonName,
  StyledImageDiv,
} from "./styledCard";
import { Pokemon } from "../../../shared/PokemonType";

type PokemonDataProps = {
  pokemon: Pokemon[];
  loading: boolean;
};

const PokemonCard = ({ pokemon, loading }: PokemonDataProps) => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/favorite/${id}`);
  };

  return (
    <>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemon.map((pokemon: Pokemon) => {
          return (
            <StyledCard
              key={pokemon.id}
              onClick={() => {
                handleCardClick(pokemon.id);
              }}
            >
              <StyledCardTop>{"#" + pokemon.id}</StyledCardTop>
              <StyledImageDiv>
                <StyledImage
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
              </StyledImageDiv>
              <StyledPokemonName>{pokemon.name}</StyledPokemonName>
            </StyledCard>
          );
        })
      )}
    </>
  );
};

export default PokemonCard;
