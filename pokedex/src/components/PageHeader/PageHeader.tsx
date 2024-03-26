import React from "react";
import Navbar from "../NavBar/NavBar"; // Importing the NavBar component
import pokemonLogo from "./pokemonLogo.png";
import { StyledPageHeader, StyledPokemonLogo } from "./styledPageHeader";

// Define the type for props
type PageHeaderProps = {
  homePageTitle: string; // Prop for the title of the home page
  favoritePageName: string; // Name for the favorite page link
  hrefHomePage: string; // Href for the home page link
  hrefFavoritePage: string; // Href for the favorite page link
};

const PageHeader: React.FC<PageHeaderProps> = ({
  homePageTitle,
  favoritePageName,
  hrefHomePage,
  hrefFavoritePage,
}) => {
  return (
    <StyledPageHeader>
      <div>
        <StyledPokemonLogo src={pokemonLogo} alt="Pokemon Logo" />{" "}
      </div>
      <div>
        <Navbar
          homePageName={homePageTitle} // Pass homePageTitle as homePageName prop
          favoritePageName={favoritePageName} // Pass favoritePageName prop
          hrefHomePage={hrefHomePage} // Pass hrefHomePage prop
          hrefFavoritePage={hrefFavoritePage} // Pass hrefFavoritePage prop
        />
      </div>
    </StyledPageHeader>
  );
};

export default PageHeader;
