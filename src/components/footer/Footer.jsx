import { Link } from "react-scroll";
import style from "./footer.module.css";

import gmail from "./../../assets/icons/gmail.svg";
import github from "./../../assets/icons/github.svg";
import cv from "./../../assets/icons/cv-download.svg";
import top from "./../../assets/icons/back-top-icon.svg";
import linkedin from "./../../assets/icons/linkedin.svg";
import cvPdf from "./../../assets/curriculum/tulio-minini-cv.pdf";

export function Footer() {
  return (
    <footer id="contact" className={style.footer_container}>
      <Link
        to="hello"
        offset={-60}
        style={{ textDecoration: "none" }}
        smooth={true}
        className={style.footer__back_top}
        title="Back to Top"
      >
        <img
          className={style.footer__top_icon}
          src={top}
          alt="white doubled arrow pointing up"
        />
        <p>back to top</p>
      </Link>
      <h2>
        <span>&#62;</span> <span>Tulio</span> Minini <span>&#60;</span>
      </h2>
      <div className={style.footer__icons}>
        <a
          href="mailto:tulio.mminini@gmail.com"
          target={"_blank"}
          rel="noreferrer"
          title="Send an e-mail"
        >
          <img src={gmail} alt="white doubled arrow pointing up" />
        </a>
        <a
          href="https://www.linkedin.com/in/tulio-minini/"
          target={"_blank"}
          rel="noreferrer"
          title="LinkedIn Profile"
        >
          <img src={linkedin} alt="linkedin pink logo" />
        </a>
        <a
          href="https://github.com/t-minini"
          target={"_blank"}
          rel="noreferrer"
          title="GitHub Profile"
        >
          <img src={github} alt="github pink logo" />
        </a>
        <a
          href={cvPdf}
          download
          target={"_blank"}
          rel="noreferrer"
          title="Download CV"
        >
          <img src={cv} alt="cv download pink logo" />
        </a>
      </div>
      <div className={style.footer__copyright}>
        <p>
          <span>@2023 Tulio Minini</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
