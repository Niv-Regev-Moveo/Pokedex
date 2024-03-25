import { useState } from "react";
import {
  StyledPagesLinks,
  StyledLinkToPages,
  StyledMarkForLinks,
} from "./styledNavBar";

type NavBarProps = {
  homePageName: string;
  favoritePageName: string;
  hrefHomePage: string;
  hrefFavoritePage: string;
};

const NavBar = ({
  homePageName,
  favoritePageName,
  hrefHomePage,
  hrefFavoritePage,
}: NavBarProps) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <StyledPagesLinks>
        <StyledLinkToPages
          isActive={activeLink === hrefHomePage}
          onClick={() => handleLinkClick(hrefHomePage)}
        >
          <StyledMarkForLinks
            isActive={activeLink === hrefHomePage}
            onClick={() => handleLinkClick(hrefHomePage)}
          >
            {homePageName}
          </StyledMarkForLinks>
        </StyledLinkToPages>
        <StyledLinkToPages
          isActive={activeLink === hrefFavoritePage}
          onClick={() => handleLinkClick(hrefFavoritePage)}
        >
          <StyledMarkForLinks
            isActive={activeLink === hrefHomePage}
            onClick={() => handleLinkClick(hrefHomePage)}
          >
            {favoritePageName}
          </StyledMarkForLinks>
        </StyledLinkToPages>
      </StyledPagesLinks>
    </nav>
  );
};

export default NavBar;
