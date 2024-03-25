import React from "react";

type NavBarProps = {
  homePageName: string;
  favoritePageName: string;
  hrefHomePage: string;
  hrefFavoritePage: string;
};

const NavBar = ({
  homePageName,
  favoritePageName,
  hrefFavoritePage,
  hrefHomePage,
}: NavBarProps) => {
  return (
    <nav>
      <ul>
        <li>
          <a href={hrefHomePage}>{homePageName}</a>
        </li>
        <li>
          <a href={hrefFavoritePage}>{favoritePageName}</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
