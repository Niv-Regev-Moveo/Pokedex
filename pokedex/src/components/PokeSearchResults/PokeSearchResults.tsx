const PokeSearchResult = ({ pokemonsData }: any) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {pokemonsData.map((result: any, id: any) => (
          <li key={id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeSearchResult;
