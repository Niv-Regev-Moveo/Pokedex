import PokemonCard from "../Card/Card";

const PokemonList = ({ pokemonsData, loading }: any) => {
  return (
    <div>
      <PokemonCard pokemon={pokemonsData} loading={loading} />
    </div>
  );
};

export default PokemonList;
