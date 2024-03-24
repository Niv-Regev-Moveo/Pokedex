import React, { useState } from "react";

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";

const SearchBox = ({ setPokemonsData }: any) => {
  const [input, setInput] = useState("");

  const fetchData = (value: string) => {
    fetch(pokemonURL)
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.filter((pokemonData: any) =>
          pokemonData.name.toLowerCase().includes(value.toLowerCase())
        );
        setPokemonsData(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search Pokemon"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
