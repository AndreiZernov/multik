import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Logos from "./Logos";

const Links = [
  "portrait",
  "conceptual",
  "still_life",
  "candid",
  "urban",
  "video",
  "about",
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [positionY, setPositionY] = useState(10);
  const handleMenu = () => setOpenMenu(!openMenu);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30 && window.innerWidth > 768) {
        setPositionY("50%");
      } else {
        setPositionY(10);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Link className="home" to="/" onClick={() => handleClick()}>
        <img src={require("../assets/mltl_white.png")} alt="" />
      </Link>
      <Link className="header-name" to="/" onClick={() => handleClick()}>
        <h1>MULTIK</h1>
      </Link>
      <img
        className="header-icon"
        style={{ top: positionY }}
        onClick={() => handleMenu()}
        src={require("../assets/menu-outline.svg")}
        alt="menu"
      />
      <div
        className="header-drop"
        style={{
          transform: openMenu ? "translateX(0)" : "translateX(100%)",
          opacity: openMenu ? 1 : 0,
          zIndex: openMenu ? 18 : 0,
        }}
      >
        <Link to="/" onClick={() => handleClick()}>
          <img src={require("../assets/home.png")} alt="home" />
        </Link>
        {Links.map((link) => (
          <Link key={link} onClick={() => handleClick()} to={`/${link}`}>
            {link.toUpperCase().replace("_", " ")}
          </Link>
        ))}
        <Logos />
      </div>
    </>
  );
};

export default Header;
