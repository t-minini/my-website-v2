import style from "./about.module.css";

export function About() {
  return (
    <article id="about" className={style.about_container}>
      <div className={style.about__title}>
        <h2>
          <span>&#62;</span>about me
        </h2>
      </div>
      <div className={style.about__text}>
        <p>
          a former interior designer who found his passion for web development.
        </p>
        <p>
          Hi,
          <iframe
            src={"https://giphy.com/embed/w1OBpBd7kJqHrJnJ13"}
            frameBorder="0"
            title="hello"
            style={{
              position: "relative",
              bottom: "-10px",
              height: "50px",
              width: "50px",
            }}
          />
          <br />
          <br />
          I'm Tulio Minini, a front-end developer with a passion for creating
          beautiful, functional websites that deliver exceptional user
          experiences. With over a decade of professional experience in the
          construction, interior design, architecture, and hospitality
          industries, I bring a unique perspective to my work. <br />
          <br />
          Originally from Brazil, I relocated to Dublin, Ireland, in 2015 to
          challenge myself and improve my language skills. After spending
          several years working in hospitality, I returned to my primary area of
          expertise as a design technician. However, the pandemic gave me the
          opportunity to reevaluate my professional goals and pursue my
          long-standing interest in technology.
          <br />
          <br />
          In 2022, I completed{" "}
          <a
            href="https://www.ironhack.com/en"
            target={"_blank"}
            rel="noreferrer"
            title="Visit Website"
          >
            Ironhack
          </a>
          's full-stack web development bootcamp, which provided me with the
          technical skills and knowledge necessary to become a front-end
          developer. As someone with a background in interior design, I have a
          keen eye for design and aesthetics, and I enjoy creating visually
          appealing websites that are also functional and user-friendly.
          <br />
          <br />
          When I'm not coding, I enjoy listening to music, collecting vinyl
          records, and attending concerts. I'm also a cat lover and a sci-fi
          enthusiast, with a particular interest in space and afterlife
          theories.
          <br />
          <br />
          With a dedication to excellence and a passion for learning, I'm
          excited to continue growing as a developer and contributing to
          innovative projects.
        </p>
      </div>
    </article>
  );
}
