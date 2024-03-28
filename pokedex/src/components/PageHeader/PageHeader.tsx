import Navbar from "../NavBar/NavBar";
import pokemonLogo from "./pokemonLogo.png";
import { StyledPageHeader, StyledPokemonLogo } from "./styledPageHeader";
import { useNavigate } from "react-router-dom";

type PageHeaderProps = {
  homePageTitle: string;
  favoritePageName: string;
  hrefHomePage: string;
  hrefFavoritePage: string;
};

const PageHeader = ({
  homePageTitle,
  favoritePageName,
  hrefHomePage,
  hrefFavoritePage,
}: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    navigate(link);
  };
  return (
    <StyledPageHeader>
      <div>
        <StyledPokemonLogo
          src={pokemonLogo}
          alt="Pokemon Logo"
          onClick={() => {
            handleLinkClick("/");
          }}
        />
      </div>
      <div>
        <Navbar
          homePageName={homePageTitle}
          favoritePageName={favoritePageName}
          hrefHomePage={hrefHomePage}
          hrefFavoritePage={hrefFavoritePage}
        />
      </div>
    </StyledPageHeader>
  );
};

export default PageHeader;
