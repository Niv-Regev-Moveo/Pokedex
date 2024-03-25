import {
  StyledSearchButton,
  StyledSearchBar,
  StyledSearchOption,
  StyledSearchBarDiv,
} from "./styledPokeSearchResults";

const PokeSearchResult = ({ pokemonsData }: any) => {
  return (
    <StyledSearchBarDiv>
      <StyledSearchBar defaultValue="">
        <option value="" disabled></option>
        {pokemonsData.map((result: any, id: any) => (
          <StyledSearchOption key={id} value={result.name}>
            {result.name}
          </StyledSearchOption> // trying to access to the options style
        ))}
      </StyledSearchBar>
      <StyledSearchButton>Search</StyledSearchButton>
    </StyledSearchBarDiv>
  );
};

export default PokeSearchResult;
