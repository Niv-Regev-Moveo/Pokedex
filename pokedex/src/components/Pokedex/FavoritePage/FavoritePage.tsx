import PageHeader from "../PageHeader/PageHeader";
import DetailedCard from "../DetailedCard";
import Map from "../../GoogleMap/Map/Map";

import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledArrowToHomePage } from "./styledFavoritePage";
import { Pokemon } from "../../../shared/PokemonType";
import { PokemonBackgroundColor } from "../DetailedCard/styledDetailedCard";
import {
  getPokemonFromLocalStorage,
  getPokemonLocationFromLocalStorage,
} from "../../../utils/api";

interface PokemonWithBackgroundColor extends Pokemon {
  types: { type: { name: PokemonBackgroundColor } }[];
}

const FavoritePage = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [pokemonLocation, setPokemonLocation] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 32.0649,
    lng: 34.7719,
  });

  const [err, setErr] = useState<Error | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const officeLocation = useMemo(
    () => ({
      lat: 32.0649,
      lng: 34.7719,
    }),
    []
  );

  useEffect(() => {
    const pokemonLocationFromLocalStorage = getPokemonLocationFromLocalStorage(
      `${id}`
    );

    if (pokemonLocationFromLocalStorage) {
      const { latitude, longitude } = pokemonLocationFromLocalStorage;
      setPokemonLocation({ lat: latitude, lng: longitude });
    } else {
      console.log("Pokémon location not found in local storage.");
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData([data]);
        getPokemonFromLocalStorage(`${id}`);
      })
      .catch((err) => setErr(err));
  }, [id]);

  return (
    <div className="App">
      <PageHeader
        homePageTitle={"pokedex"}
        myMapPageName="Favorite"
        hrefHomePage=""
        hrefMyMapPage=""
      />
      <main>
        <div>
          <StyledArrowToHomePage
            onClick={() => {
              navigate("/");
            }}
          >
            &#8592; home page
          </StyledArrowToHomePage>
        </div>
        {pokemonData.length > 0 && (
          <DetailedCard
            pokemon={pokemonData[0] as PokemonWithBackgroundColor}
          />
        )}
        <Map
          isLoadedMap={true}
          center={officeLocation}
          pokemonName={id}
          pokemonLocation={pokemonLocation}
        />
      </main>
    </div>
  );
};

export default FavoritePage;
