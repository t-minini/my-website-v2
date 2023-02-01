import style from "./skills.module.css";

export function Skills() {
  return (
    <article className={style.skills_container}>
      <h2>
        <span>&#62;</span>skills
      </h2>
      <div className={style.skills__using}>
        <div>html5</div>
        <div>css3</div>
        <div>javascript</div>
        <div>react</div>
        <div>bootstrap</div>
        <div>material ui</div>
        <div>figma</div>
        <div>github</div>
      </div>
      <div className={style.skills__learning}>
        <div>sass</div>
        <div>typescript</div>
      </div>
      <div className={style.skills__other}>
        <div>nodejs</div>
        <div>mongodb</div>
        <div>portuguese</div>
      </div>
    </article>
  );
}
