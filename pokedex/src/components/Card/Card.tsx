import { useState } from "react";
import {
  StyledCard,
  StyledCardTop,
  StyledImage,
  StyledPokemonName,
  StyledImageDiv,
} from "./styledCard";

//Add onclick function that will show the card component with more details

const PokemonCard = ({ pokemon, loading }: any) => {
  const handleClick = () => {
    console.log("hello hello");
  };

  return (
    <>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemon.map((item: any) => {
          return (
            <StyledCard key={item.id} onClick={handleClick}>
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
