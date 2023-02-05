import style from "./footer.module.css";

import top from "./../../assets/icons/back-top-icon.svg";
import gmail from "./../../assets/icons/gmail.svg";
import linkedin from "./../../assets/icons/linkedin.svg";
import github from "./../../assets/icons/github.svg";
import cv from "./../../assets/icons/cv-download.svg";

export function Footer() {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer__back_top}>
        <img
          className={style.footer__top_icon}
          src={top}
          alt="white doubled arrow pointing up"
        />
        <p>back to top</p>
      </div>
      <h2>
        <span>&#62;</span> <span>Tulio</span> Minini <span>&#60;</span>
      </h2>
      <div className={style.footer__icons}>
        <img src={gmail} alt="white doubled arrow pointing up" />
        <img src={linkedin} alt="linkedin pink logo" />
        <img src={github} alt="github pink logo" />
        <img src={cv} alt="cv download pink logo" />
      </div>
      <div className={style.footer__copyright}>
        <p>
          <span>@2023 Tulio Minini</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
