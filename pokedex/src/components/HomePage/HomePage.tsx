import React, { useState, useEffect, useCallback } from "react";
import PageHeader from "../PageHeader/PageHeader";
import PokeSearchResult from "../PokeSearchResults/PokeSearchResults";
import PokemonCard from "../Card/Card";
import { StyledCardsContainer } from "../PokemonList/styledPokemonList";
import { getPokemons, getSpecificPokemon, BASE_URL } from "../../utils/api";

function HomePage() {
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
      <PageHeader
        homePageTitle="pokedex"
        favoritePageName="Favorite"
        hrefHomePage=""
        hrefFavoritePage=""
      />
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

export default HomePage;
