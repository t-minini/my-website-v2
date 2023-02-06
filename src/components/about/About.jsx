import style from "./about.module.css";

export function About() {
  return (
    <article id="about" className={style.about_container}>
      <div className={style.about__title}>
        <h2>
          <span>&#62;</span>about <br /> me
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
          my name is Tulio Minini, a professional with 10+ years of experience,
          working for small to medium-sized businesses in the construction,
          interior design, architecture and hospitality industries. <br />
          <br />
          In 2015, I made the decision to leave Brazil and relocate to Dublin,
          Ireland, where I've been living for the past seven years. I aimed to
          gain life experience away from family and become fluent in English. I
          spent roughly three and a half years working in hospitality before
          returning to my career as a design technician, which was my primary
          area of expertise, and during the three years in this profession, my
          English vocabulary as well as my hard and soft skills were
          significantly improved.
          <br />
          <br />
          When the pandemic struck in 2020, I decided to rethink and re-evaluate
          my professional goals—I felt like something was missing! I began
          making plans to switch careers to technology, something I always
          wanted, but never dared to do, afraid of starting over in a brand-new
          field.
          <br />
          <br />
          In 2022, I carried out my objectives by completing{" "}
          <a
            href="https://www.ironhack.com/en"
            target={"_blank"}
            rel="noreferrer"
            title="Visit Website"
          >
            Ironhack
          </a>
          ’s full-stack web development bootcamp, which lasted nine weeks and
          required 360 hours of full-time study time. Because of my background
          in interior design, I fell in love with the front-end stack, and ever
          since I've been working on smaller projects and taking online classes
          to hone my coding, styling, and design abilities.
          <br />
          <br />I have a modest but expanding vinyl collection. I love cats,
          travelling, Star Wars and Star Trek, and going to music concerts. I
          dream big and always give my best in everything I do. I also enjoy
          talking about space and afterlife theories.
        </p>
      </div>
    </article>
  );
}
