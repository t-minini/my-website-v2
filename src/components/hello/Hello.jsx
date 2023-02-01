import style from "./hello.module.css";

export function Hello() {
  return (
    <header className={style.hello_container}>
      <h1>Hello, I'm Tulio</h1>
      <h1>
        front-end <span>dev</span>eloper
      </h1>
    </header>
  );
}
