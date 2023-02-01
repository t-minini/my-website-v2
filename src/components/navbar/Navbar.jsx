import style from "./navbar.module.css";
// import logo from "./../../assets/images/logo.png";

export function Navbar() {
  return (
    <nav className={style.navbar_container}>
      {/* <div className={style.navbar__img}>
        <img src={logo} alt="" />
      </div> */}
      <div className={style.navbar__logo}>
        <h2>
          <span>&#62;</span>tm
        </h2>
      </div>
      <div className={style.navbar__ul}>
        <ul>
          <li>About Me</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
