import style from "./footer.module.css";

export function Footer() {
  return (
    <footer className={style.footer_container}>
      <p>back to top</p>
      <h2>
        <span>&#62;</span> <span>Tulio</span> Minini<span>&#60;</span>
      </h2>
      <div className={style.footer__icons}></div>
      <p>
        @2023<span>Tulio Minini</span>All Rights Reserved.
      </p>
    </footer>
  );
}
