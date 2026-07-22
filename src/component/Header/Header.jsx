import { useState, useEffect } from "react";

import Logo from "../../assets/logo.png";
import MegaMenu from "../MegaMenu/MegaMenu";
import SearchIcon from "../../assets/searchIcon.png";
import "./Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [mobileNav, setMobileNav] = useState(false); // for mobile navigation on click

  // After 50px scroll will add class fixed
  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={fixed ? "fixed" : ""}>
        <div className="container">
          <div className="header_main">
            <div className="logo">
              <img
                src={Logo}
                alt="Logoipsum"
                title="Logoipsum"
                width="100%"
                height="100%"
              />
            </div>

            {/* On mobile nav will be preasent as toogle menu  */}
            <nav className={mobileNav ? "active" : ""}>
              <a href="#">Home</a>
              {/* mega menu will appear after hovring on About  */}
              <a
                href="#"
                onMouseEnter={() => setMenuActive(true)}
                onMouseLeave={() => setMenuActive(false)}
                className={menuActive ? "active" : ""}
              >
                About
                {menuActive && <MegaMenu />}
              </a>
              <a href="#">Services</a>
              <a href="#">Innovations</a>
              <a href="#">Investors</a>
              <a href="#">Insights</a>
              <a href="#">Career</a>
              <a href="#">Contact</a>
            </nav>
            <div className="search_icon">
              <img
                src={SearchIcon}
                alt="Search"
                title="Search"
                width="100%"
                height="100%"
              />
            </div>
            {/* only visible on mobile and tablet */}
            <div
              className="mobileNavigation"
              onClick={() => setMobileNav(!mobileNav)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
