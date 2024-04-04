import { useState } from "react";
import {
  StyledPagesLinks,
  StyledLinkToPages,
  StyledMarkForLinks,
} from "./styledNavBar";
import { useNavigate } from "react-router-dom";

type NavBarProps = {
  homePageName: string;
  myMapPageName: string;
  hrefHomePage: string;
  hrefMyMapPage: string;
};

const NavBar = ({
  homePageName = "Home",
  myMapPageName = "My-Map",
  hrefHomePage = "",
  hrefMyMapPage = "",
}: NavBarProps) => {
  const [activeLink, setActiveLink] = useState("");

  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <StyledPagesLinks>
        <StyledLinkToPages
          $isActive={activeLink === hrefHomePage}
          onClick={() => {
            handleLinkClick(hrefHomePage);
            navigate("/");
          }}
        >
          <StyledMarkForLinks
            $isActive={activeLink === hrefHomePage}
            onClick={() => handleLinkClick(hrefHomePage)}
          >
            {homePageName}
          </StyledMarkForLinks>
        </StyledLinkToPages>

        <StyledLinkToPages
          $isActive={activeLink === hrefMyMapPage}
          onClick={() => {
            handleLinkClick(hrefMyMapPage);
            navigate("/My-Map");
          }}
        >
          <StyledMarkForLinks
            $isActive={activeLink === hrefHomePage}
            onClick={() => handleLinkClick(hrefHomePage)}
          >
            {myMapPageName}
          </StyledMarkForLinks>
        </StyledLinkToPages>
      </StyledPagesLinks>
    </nav>
  );
};

export default NavBar;
