import { Pokemon } from "../../shared/PokemonType";
import PokemonCard from "../Card/Card";

type typePokemonListProps = {
  pokemonsData: Pokemon[];
  loading: boolean;
};

const PokemonList = ({ pokemonsData, loading }: typePokemonListProps) => {
  return (
    <div>
      <PokemonCard pokemon={pokemonsData} loading={loading} />
    </div>
  );
};

export default PokemonList;
