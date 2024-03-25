import {
  StyledCard,
  StyledCardTop,
  StyledImage,
  StyledPokemonName,
  StyledImageDiv,
} from "./styledCard";

const PokemonCard = ({ pokemon, loading }: any) => {
  return (
    <>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemon.map((item: any) => {
          return (
            <StyledCard>
              <StyledCardTop>{"#" + item.id}</StyledCardTop>
              <StyledImageDiv>
                <StyledImage src={item.sprites.front_default} alt={item.name} />
              </StyledImageDiv>
              <StyledPokemonName>{item.name}</StyledPokemonName>
            </StyledCard>
          );
        })
      )}
    </>
  );
};

export default PokemonCard;
