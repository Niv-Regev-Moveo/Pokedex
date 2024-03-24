import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox/SearchBox";
import PokeSearchResult from "./components/PokeSearchResults/PokeSearchResults";
import PageHeader from "./components/PageHeader/PageHeader";
import PokemonCard from "./components/Card/Card";

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemons = async () => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getSpecificPokemon(res.data.results);
    setLoading(false);
  };

  const getSpecificPokemon = useCallback(async (res: any) => {
    res.map(async (item: any) => {
      const results = await axios.get(item.url);

      setPokemonsData((state: any) => {
        state = [...state, results.data];
        return state;
      });
    });
  }, []);

  useEffect(() => {
    console.log("im here");

    getPokemons();
  }, []);

  return (
    <div className="App">
      <div>
        <PageHeader homePageTitle={"pokedex"} />
      </div>
      <main>
        <div>
          <SearchBox setPokemonsData={setPokemonsData} />
          <PokeSearchResult pokemonsData={pokemonsData} />
        </div>
        <div>
          <PokemonCard pokemon={pokemonsData} loading={loading} />
        </div>
      </main>
    </div>
  );
}

export default App;
