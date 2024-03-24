import StyledCard from "./styledCard";

type PokemonCardProps = {};

const PokemonCard = ({ pokemon, loading }: any) => {
  return (
    <StyledCard>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemon.map((item: any) => {
          return (
            <div>
              <h3>{item.id}</h3>
              <img src={item.sprites.front_default} alt={""} />
              <h1>{item.name}</h1>
            </div>
          );
        })
      )}
    </StyledCard>
  );
};

export default PokemonCard;
