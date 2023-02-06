import { Link } from "react-scroll";
import style from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={style.navbar_container}>
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

      <div className={style.navbar__ul}>
        <ul>
          <Link
            to="about"
            offset={-70}
            style={{ textDecoration: "none", background: "transparent" }}
            smooth={true}
          >
            <li>About</li>
          </Link>
          <Link
            to="skills"
            offset={-70}
            style={{ textDecoration: "none", background: "transparent" }}
            smooth={true}
          >
            <li>Skills</li>
          </Link>
          <Link
            to="portfolio"
            offset={-70}
            style={{ textDecoration: "none", background: "transparent" }}
            smooth={true}
          >
            <li>Portfolio</li>
          </Link>
          <Link
            to="contact"
            style={{
              textDecoration: "none",
            }}
            smooth={true}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
