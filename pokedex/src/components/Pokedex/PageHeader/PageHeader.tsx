import Navbar from "../NavBar/NavBar";
import pokemonLogo from "./pokemonLogo.png";
import { StyledPageHeader, StyledPokemonLogo } from "./styledPageHeader";
import { useNavigate } from "react-router-dom";

type PageHeaderProps = {
  homePageTitle: string;
  myMapPageName: string;
  hrefHomePage: string;
  hrefMyMapPage: string;
};

const PageHeader = ({
  homePageTitle,
  myMapPageName,
  hrefHomePage,
  hrefMyMapPage,
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
          myMapPageName={myMapPageName}
          hrefHomePage={hrefHomePage}
          hrefMyMapPage={hrefMyMapPage}
        />
      </div>
    </StyledPageHeader>
  );
};

export default PageHeader;
