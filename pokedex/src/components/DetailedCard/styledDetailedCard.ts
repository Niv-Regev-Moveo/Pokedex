import styled from "styled-components";

export type PokemonBackgroundColor =
  | "normal"
  | "fire"
  | " water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "bug"
  | "psychic"
  | "rock"
  | "dragon"
  | "ghost"
  | "dark"
  | "steel"
  | "fairy";

const getPokemonType = (backgroundColor: PokemonBackgroundColor) => {
  switch (backgroundColor) {
    case "normal":
      return "#A8A77A";

    case "fire":
      return "#EE8130";

    case " water":
      return "#6390F0";

    case "electric":
      return "#F7D02C";

    case "grass":
      return "#7AC74C";

    case "ice":
      return " '#96D9D6'";

    case "fighting":
      return "#C22E28";

    case "poison":
      return "#A33EA1";

    case "ground":
      return "'#E2BF65'";

    case "flying":
      return "#A98FF3";

    case "psychic":
      return "#F95587";

    case "bug":
      return "#A6B91A";

    case "rock":
      return "#B6A136";

    case "ghost":
      return "#735797";

    case "dragon":
      return "#6F35FC";

    case "dark":
      return "#705746";

    case "steel":
      return "#B7B7CE";

    case "fairy":
      return "#D685AD";

    default:
      return "#000000";
  }
};
export const StyledPokemonTypeCardLeftSide = styled.p<{
  color: PokemonBackgroundColor;
}>`
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => getPokemonType(props.color)};
`;

export const StyledPokemonDetailedCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f5;
  width: 70%;
  width: 400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 133, 0.1);
`;

export const StyledLeftSideCard = styled.div`
  height: 230px;
  font-size: 16px;
  background-color: #f0f0f5;
  color: #020166;
  overflow: hidden;
  border-right: rgba(0, 0, 113, 0.1) 2px;
  border-right-style: groove;
  padding-right: 20px;
  padding-left: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledPokemonNameCardLeftSide = styled.p`
  text-align: center;
`;

export const StyledRightSideCard = styled.div`
  font-size: 15px;
`;
export const StyledDescription = styled.div``;
export const StyledStatsDetails = styled.div`
  display: flex;
`;

export const StyledStatsAtkDefSpeed = styled.div`
  margin-top: 42px;
  margin-left: 10px;
  margin-right: 10px;
`;
