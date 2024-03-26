import React, { useState } from "react";
import DetailedCard from "../DetailedCard";
import {
  StyledSearchButton,
  StyledSearchBar,
  StyledSearchOption,
  StyledSearchBarDiv,
} from "./styledPokeSearchResults";

const PokeSearchResult = ({ pokemonsData }: any) => {
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  const onSelect = (selectedName: string) => {
    const selected = pokemonsData.find(
      (pokemon: any) => pokemon.name === selectedName
    );
    setSelectedPokemon(selected);
  };

  return (
    <div>
      <StyledSearchBarDiv>
        <StyledSearchBar
          defaultValue=""
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="" disabled>
            Select a Pokémon
          </option>
          {pokemonsData.map((result: any, id: any) => (
            <StyledSearchOption key={id} value={result.name}>
              {result.name}
            </StyledSearchOption>
          ))}
        </StyledSearchBar>
        <StyledSearchButton
          onClick={() => {
            if (selectedPokemon) {
              console.log("Selected Pokémon Details:", selectedPokemon);
            } else {
              console.log("No Pokémon selected");
            }
          }}
        >
          Search
        </StyledSearchButton>
      </StyledSearchBarDiv>
      {selectedPokemon && <DetailedCard pokemon={selectedPokemon} />}
    </div>
  );
};

export default PokeSearchResult;
