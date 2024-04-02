import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PageHeader from "../PageHeader/PageHeader";
import PokeSearchResult from "../PokeSearchResults/PokeSearchResults";
import PokemonCard from "../Card/Card";
import { StyledCardsContainer } from "../PokemonList/styledPokemonList";
import {
  getSpecificPokemon,
  BASE_URL,
  setPokemonToLocalStorage,
  removePokemonFromLocalStorage,
} from "../../../utils/api";
import { StyledButton, ButtonsContainer } from "./styledHomePage";
import { Pokemon } from "../../../shared/PokemonType";

interface PokemonUrlProps {
  name: string;
  url: string;
}

function HomePage() {
  const [pokemonsData, setPokemonsData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(BASE_URL);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);

  async function getPokemons(url: string): Promise<{
    data: PokemonUrlProps[];
    next: string | null;
    previous: string | null;
  }> {
    const response = await axios.get(url);
    const { results, next, previous } = response.data;
    return { data: results, next, previous };
  }

  const fetchPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const { data: pokemonUrls, next, previous } = await getPokemons(url);
      const returnedPokemonsData = pokemonUrls.map(
        async (specificUrlData) => await getSpecificPokemon(specificUrlData.url)
      );
      const pokemonData = await Promise.all(returnedPokemonsData);
      setPokemonsData(pokemonData);
      setPokemonToLocalStorage(url, pokemonData);
      setNextUrl(next);
      setPrevUrl(previous);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchPokemons();
  }, [url]);

  const handlePrevClick = () => {
    if (prevUrl) {
      setUrl(prevUrl);
      setPokemonToLocalStorage(prevUrl, pokemonsData);
      removePokemonFromLocalStorage(url);
    }
  };
  const handleNextClick = () => {
    if (nextUrl) {
      setUrl(nextUrl);
      setPokemonToLocalStorage(nextUrl, pokemonsData);
      removePokemonFromLocalStorage(url);
    }
  };

  return (
    <div className="App">
      <PageHeader
        homePageTitle="Home"
        myMapPageName="My Map"
        hrefHomePage=""
        hrefMyMapPage=""
      />
      <main>
        <div>
          <PokeSearchResult pokemonsData={pokemonsData} />
        </div>
        <StyledCardsContainer>
          {!loading && <PokemonCard pokemon={pokemonsData} loading={loading} />}
        </StyledCardsContainer>
        <ButtonsContainer>
          <StyledButton onClick={handlePrevClick}>prev</StyledButton>
          <StyledButton onClick={handleNextClick}>next</StyledButton>
        </ButtonsContainer>
      </main>
    </div>
  );
}

export default HomePage;
