import Navbar from "../NavBar/NavBar"; // Importing the NavBar component
import { StyledPageHeader } from "./styledPageHeader";
type PageHeaderProps = {
  homePageTitle: string; // Prop for the title of the home page
};

const PageHeader = ({ homePageTitle }: PageHeaderProps) => {
  return (
    <StyledPageHeader>
      {" "}
      {/* Apply styles to the header */}
      <div>
        <img src="pokemonLogo.png" alt="Pokemon" /> {/* Pokemon image */}
      </div>
      <div>
        <Navbar
          homePageName={"Pokedex"} // Name for the home page link
          favoritePageName={"Favorite"} // Name for the favorite page link
          hrefHomePage={""} // Href for the home page link
          hrefFavoritePage={""} // Href for the favorite page link
        />
      </div>
    </StyledPageHeader>
  );
};

export default PageHeader;
