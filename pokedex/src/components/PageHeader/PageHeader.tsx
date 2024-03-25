import Navbar from "../NavBar/NavBar";
import { styledPageHeader, styledNavBarPages } from "./styledPageHeader";

type PageHeaderProps = {
  homePageTitle: string;
};

const PageHeader = ({ homePageTitle }: PageHeaderProps) => {
  return (
    <header>
      <div>
        <h1>{homePageTitle}</h1>
      </div>
      <div>
        <Navbar
          homePageName={"Pokedex"}
          favoritePageName={"Favorite"}
          hrefHomePage={""}
          hrefFavoritePage={""}
        />
      </div>
    </header>
  );
};

export default PageHeader;
