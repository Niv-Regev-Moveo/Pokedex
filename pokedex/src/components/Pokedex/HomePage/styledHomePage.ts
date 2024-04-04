import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  margin: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #373299;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: 3px black;
  box-shadow: 0 5px #999;
  display: inline-block;
  outline: none;

  &:hover {
    background-color: #373399;
  }

  &:active {
    background-color: #373399;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
