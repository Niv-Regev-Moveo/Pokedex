import PageHeader from "../PageHeader/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import DetailedCard from "../DetailedCard";
import { useState, useEffect } from "react";
import { StyledArrowToHomePage } from "./styledFavoritePage";
import { Pokemon } from "../../shared/PokemonType";
import { PokemonBackgroundColor } from "../DetailedCard/styledDetailedCard";

interface PokemonWithCorrectTypes extends Pokemon {
  types: { type: { name: PokemonBackgroundColor } }[];
}

const FavoritePage = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [err, setErr] = useState<Error | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData([data]);
      })
      .catch((err) => setErr(err));
  }, [id]);

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
          <StyledArrowToHomePage
            onClick={() => {
              navigate("/");
            }}
          >
            &#8592; home page
          </StyledArrowToHomePage>
        </div>
        {pokemonData.length > 0 && (
          <DetailedCard pokemon={pokemonData[0] as PokemonWithCorrectTypes} />
        )}
      </main>
    </div>
  );
};

export default FavoritePage;
