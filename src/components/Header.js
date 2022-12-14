import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import ProgressiveImage from "react-progressive-image";
import { Link, NavLink } from "react-router-dom";
import Socialicons from "./Socialicons";
import Socialiconsfooter from "./SocialIconsFooter";

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);
  

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <ProgressiveImage
              src={information.brandImage}
              placeholder="/images/about-image-placeholder.png"
            >
              {(src) => <img style={{zoom:"50%"}} src={src} alt="brandimage" />}
            </ProgressiveImage>
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Resume</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>Portfolio</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          
        
        {new Date().toLocaleDateString()}{" "}
        
          <b>
            <span><Socialiconsfooter></Socialiconsfooter></span>
            
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
