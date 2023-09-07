import { Link } from "react-scroll";
import style from "./footer.module.css";

import top from "./../../assets/icons/back-top-icon.svg";
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
          src={top}
          alt="white doubled arrow pointing up"
        />
        <p>back to top</p>
      </Link>
      <h2>
        <span>&#62;</span> Tulio Minini <span>&#60;</span>
      </h2>
      <div className={style.footer__links}>
        <a
          href="mailto:tulio.mminini@gmail.com"
          target={"_blank"}
          rel="noreferrer"
          title="Send me an e-mail"
        >
          Send me an e-mail
        </a>
        <a
          href="https://www.linkedin.com/in/tulio-minini/"
          target={"_blank"}
          rel="noreferrer"
          title="LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/t-minini"
          target={"_blank"}
          rel="noreferrer"
          title="GitHub Profile"
        >
          GitHub
        </a>
        <a
          href={cvPdf}
          download
          target={"_blank"}
          rel="noreferrer"
          title="Download CV"
        >
          Download CV
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
