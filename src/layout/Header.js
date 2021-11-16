import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import header from "./header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ children }) => {
  // state to switch header view from mobile to desktop__
  const [mobileView, setMobileView] = useState(false);

  // onscroll function to add and remove a navbar
  window.addEventListener("scroll", (e) => {
    const header = document.getElementById("header");
    if (window.scrollY >= 150) {
      header.style.backgroundColor = "var(--primaryColor)";
    } else if (window.scrollY <= 334) {
      header.style.backgroundColor = "transparent";
    }
  });

  // function to hide and show nav links/set or update MobileView

  const checKViewSize = (e) => {
    if (window.innerWidth >= "984") {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  window.addEventListener("resize", checKViewSize);
  useEffect(() => {
    checKViewSize();

    // return () => {
    //   cleanup
    // }
  }, []);

  const toggleMenuHandler = () => {
    setMobileView(!mobileView);
  };

  return (
    <header className={header.header} id="header">
      {children}
      {/* {logo} */}
      <div className={header.container}>
        <Link to="/" className={header.logo}>
          <div>CLOOB-HOMES</div>
        </Link>

        {mobileView && (
          <>
            {" "}
            {/* {NAV} */}
            <nav className={header.nav}>
              <ul className={header.ul}>
                <Link to="/services" className={header.link}>
                  <li>SERVICES</li>
                </Link>
                <Link to="/contact" className={header.link}>
                  <li>CONTACT-US</li>
                </Link>
                <Link to="watch_list" className={header.link}>
                  <li>WATCH-LIST</li>
                </Link>
              </ul>
              <input
                className={header.input}
                type="search"
                placeholder="Search homes around you"
              />
            </nav>
          </>
        )}

        <div onClick={toggleMenuHandler} className={header.icons}>
          {mobileView ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
