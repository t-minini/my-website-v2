import { useRef, useState } from "react";
import { Link } from "react-scroll";
import style from "./navbar.module.css";

import { IoMenu } from "react-icons/io5";

export function Navbar() {
  // menu hamburger
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(style.responsive);
  };

  // change nav background color when scrolling
  const [navColor, setNavColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`${
        navColor ? style.navbar_background : style.navbar_container
      }`}
    >
      <Link
        to="hello"
        style={{ textDecoration: "none", background: "transparent" }}
        smooth={true}
        className={style.navbar__logo}
      >
        <h2>
          <span>&#62;</span>tm
        </h2>
      </Link>
      <ul ref={navRef} className={`${style.navbar__ul} ${style.nav_hidden}`}>
        <Link
          to="about"
          offset={-70}
          style={{ textDecoration: "none", background: "transparent" }}
          smooth={true}
          onClick={showNavbar}
        >
          <li>About</li>
        </Link>
        <Link
          to="skills"
          offset={-70}
          style={{ textDecoration: "none", background: "transparent" }}
          smooth={true}
          onClick={showNavbar}
        >
          <li>Skills</li>
        </Link>
        <Link
          to="portfolio"
          offset={-70}
          style={{ textDecoration: "none", background: "transparent" }}
          smooth={true}
          onClick={showNavbar}
        >
          <li>Portfolio</li>
        </Link>
        <Link
          to="contact"
          style={{
            textDecoration: "none",
          }}
          smooth={true}
          onClick={showNavbar}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <button
        className={`${style.nav_btn} ${style.nav_close_btn}`}
        onClick={showNavbar}
      >
        <IoMenu size={45} />
      </button>
    </nav>
  );
}
