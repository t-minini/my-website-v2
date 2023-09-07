import style from "./hello.module.css";
import photo from "./../../assets/images/my-photo.png";

export function Hello() {
  return (
    <header id="hello" className={style.hello_container}>
      <div className={style.hello__phrase}>
        <h2>
          I'm <span>Tulio Minini</span>,
        </h2>
        <h1>front-end</h1>
        <h1>
          <span>dev</span>eloper
        </h1>
      </div>
      <img
        src={photo}
        alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
        className={style.hello__photo}
      />
    </header>
  );
}
