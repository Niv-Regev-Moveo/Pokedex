import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  StyledCardTop,
  StyledImage,
  StyledPokemonName,
  StyledImageDiv,
} from "./styledCard";
import { Pokemon } from "../../../shared/PokemonType";
import { getRandomLocationInTelAviv } from "../../../utils/api";

type PokemonDataProps = {
  pokemon: Pokemon[];
  loading: boolean;
};

interface PokemonLocation {
  latitude: number;
  longitude: number;
}

const setPokemonToLocalStorage = (pokemonData: Pokemon) => {
  try {
    const existingData = window.localStorage.getItem(pokemonData.name);
    let location: PokemonLocation | null = null;

    if (existingData) {
      const parsedData: { name: string; location: PokemonLocation } =
        JSON.parse(existingData);
      location = parsedData.location;
    } else {
      const randomLocation = getRandomLocationInTelAviv(2);
      location = {
        latitude: randomLocation.latitude,
        longitude: randomLocation.longitude,
      };
      const dataToStore = {
        name: pokemonData.name,
        location: location,
      };
      window.localStorage.setItem(
        pokemonData.name,
        JSON.stringify(dataToStore)
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const PokemonCard = ({ pokemon, loading }: PokemonDataProps) => {
  const navigate = useNavigate();

  const handleCardClick = (clickedPokemon: Pokemon) => {
    setPokemonToLocalStorage(clickedPokemon);
    navigate(`/favorite/${clickedPokemon.name}`);
  };

  return (
    <>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemon.map((pokemon: Pokemon) => (
          <StyledCard
            key={pokemon.name}
            onClick={() => handleCardClick(pokemon)}
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
        ))
      )}
    </>
  );
};

export default PokemonCard;
