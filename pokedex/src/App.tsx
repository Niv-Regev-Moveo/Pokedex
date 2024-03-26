import React, { useState, useEffect, useCallback } from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import PokeSearchResult from "./components/PokeSearchResults";
import PokemonCard from "./components/Card/Card";
import { StyledCardsContainer } from "./components/PokemonList/styledPokemonList";
import { getPokemons, getSpecificPokemon, BASE_URL } from "./utils/api";

function App() {
  const [pokemonsData, setPokemonsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(BASE_URL);

  const fetchPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const pokemonUrls = await getPokemons(url);
      const pokemonData = await getSpecificPokemon(
        pokemonUrls.map((pokemon) => pokemon.url)
      );
      setPokemonsData(pokemonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <PageHeader homePageTitle="pokedex" />
      <main>
        <div>
          <PokeSearchResult pokemonsData={pokemonsData} />
        </div>
        <StyledCardsContainer>
          {!loading && <PokemonCard pokemon={pokemonsData} loading={loading} />}
        </StyledCardsContainer>
      </main>
    </div>
  );
}

export default App;
