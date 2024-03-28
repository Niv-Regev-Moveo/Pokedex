import styled from "styled-components";

interface StyledLinkToPagesProps {
  $isActive: boolean;
}

interface StyledMarkForLinksProps {
  $isActive: boolean;
}

export const StyledLinkToPages = styled.li<StyledLinkToPagesProps>`
  padding: 10px;
  background-color: ${(props) => (props.$isActive ? "#020166" : "transparent")};
  cursor: pointer;

  &:hover {
    background-color: #94d97e;
  }
`;

export const StyledMarkForLinks = styled.a<StyledMarkForLinksProps>`
  text-decoration: none;
  color: ${(props) => (props.$isActive ? "white" : "transparent")};
  &:hover {
    color: black;
  }
`;

export const StyledPagesLinks = styled.ul`
  list-style-type: none;
  color: red;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding-right: 100px;
`;
