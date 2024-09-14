import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = ({ headerBtn }) => {
  const [openSubMen, setOpenSubMen] = useState(null);
  const onClick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("wsactive");
  };
  const activeFun = (name) => setOpenSubMen(name === openSubMen ? "" : name);
  const activeLi = (name) =>
    name === openSubMen ? "d-block" : "d-md-block d-sm-none";
  const iconChange = (name) => (name === openSubMen ? "ws-activearrow" : "");

  return (
    <header id="header" className="header white-menu navbar-dark">
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <Link
            href="#"
            to="/"
            onClick={() => onClick()}
            id="wsnavtoggle"
            className="wsanimated-arrow"
          >
            <span />
          </Link>
          <span className="smllogo smllogo-black">
            <img
              src="/images/logo.png"
              width={300}
              height={40}
              alt="mobile-logo"
            />
          </span>
          <span className="smllogo smllogo-white">
            <img
              src="images/logo-white.png"
              width={172}
              height={40}
              alt="mobile-logo"
            />
          </span>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix" id="wsmainfull">
          <div className="wsmainwp clearfix">
            {/* LOGO IMAGE */}
            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
            <div className="desktoplogo">
              <Link href="#" to="/" className="logo-black">
                <img src="logo.jpg" width={172} height={40} alt="header-logo" />
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="d#hero-3" className="logo-white">
                <img
                  src="images/logo-white.png"
                  width={172}
                  height={40}
                  alt="header-logo"
                />
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix" style={{ maxHeight: "700px" }}>
              <div className="overlapblackbg" onClick={() => onClick()} />
              <ul className="wsmenu-list">
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="#" to="/about">
                    About
                  </Link>
                </li>
                {/* DROPDOWN MENU */}
                {/* */}
                {/* END DROPDOWN MENU */}
                {/* DROPDOWN MENU */}
                {/* <li onClick={() => activeFun("Categories")}>
                                    <span className={`wsmenu-click ${iconChange("Categories")}`}>
                                        <i className="wsmenu-arrow" />
                                    </span>
                                    <a href="#">
                                        Categories <span className="wsarrow" />
                                    </a>
                                    <ul className={`sub-menu ${activeLi("Categories")}`}>
                                        <li>
                                            <Link href="courses-list">Development</Link>
                                        </li>
                                        <li>
                                            <Link href="courses-list">Finance &amp; Accounting</Link>
                                        </li>
                                                                                                                                     
                                        <li>
                                            <Link href="courses-list">Office Productivity</Link>
                                        </li>
                                     
                                        <li>
                                            <Link href="courses-list">Business English</Link>
                                        </li>
                                    </ul>
                                </li> */}
                {/* END DROPDOWN MENU */}
                {/* MEGAMENU */}

                {/* END MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="#" to="/contacts">
                    Contacts
                  </Link>
                </li>
                {/* DROPDOWN MENU */}
                {/* {headerBtn ? (
                                    <li className="nl-simple">
                                        <Link href="/pricing" className="btn btn-rose tra-black-hover last-link">
                                            Get Started

                                        </Link>
                                    </li>
                                ) : (
                                    <li onClick={() => activeFun("En")}>
                                        <span className={`wsmenu-click ${iconChange("En")}`}>
                                            <i className="wsmenu-arrow" />
                                        </span>
                                        <a href="#" className="lang-select">
                                            <img src="images/icons/flags/uk.png" alt="flag-icon" /> En
                                            <span className="wsarrow" />
                                        </a>
                                        <ul className={`sub-menu last-sub-menu ${activeLi("En")}`}>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="/images/icons/flags/germany.png"
                                                        alt="flag-icon"
                                                    />
                                                    Deutch
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="/images/icons/flags/spain.png"
                                                        alt="flag-icon"
                                                    />
                                                    Español
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/icons/flags/france.png"
                                                        alt="flag-icon"
                                                    />
                                                    Français
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/icons/flags/italy.png"
                                                        alt="flag-icon"
                                                    />
                                                    Italiano
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/icons/flags/russia.png"
                                                        alt="flag-icon"
                                                    />
                                                    Русский
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/icons/flags/china.png"
                                                        alt="flag-icon"
                                                    />
                                                    简体中文
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                )} */}
                {/* END DROPDOWN MENU */}
                {/* HEADER BUTTON 
								    <li class="nl-simple" >
								    	<a href="#" class="btn btn-rose tra-black-hover last-link">Get Started</a>
								    </li> */}
              </ul>
            </nav>

            {/* END MAIN MENU */}
          </div>
        </div>
        {/* END NAVIGATION MENU */}
      </div>
      {/* End header-wrapper */}
    </header>
  );
};

export default Header;
