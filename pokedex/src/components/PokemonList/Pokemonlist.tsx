import PokemonCard from "../Card/Card";

type typePokemonListProps = {
  pokemonsData: any[];
  loading: boolean;
};

const PokemonList: React.FC<typePokemonListProps> = ({
  pokemonsData,
  loading,
}) => {
  return (
    <div>
      <PokemonCard pokemon={pokemonsData} loading={loading} />
    </div>
  );
};

export default PokemonList;
