import style from "./portfolio.module.css";
import projectsJSON from "./../../portfolio.json";

export function Portfolio() {
  return (
    <article id="portfolio" className={style.portfolio_container}>
      <div className={style.portfolio__title}>
        <h2>
          <span>&#62;</span>portfolio
        </h2>
      </div>
      <div className={style.portfolio__flex}>
        {projectsJSON.map((projectsJSON) => {
          return (
            <div className={style.portfolio__card}>
              <img src={projectsJSON.img} alt="projects screenshot" />

              <div className={style.portfolio__card_body}>
                <h5>{projectsJSON.project}</h5>
                <p>{projectsJSON.description}</p>
                <div className={style.portfolio__card_links}>
                  <a
                    href={projectsJSON.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={projectsJSON.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

/* <div key={projectsJSON.id} className={style.portfolio__card}>
              <div>
                <img src={`${projectsJSON.img}`} alt="project screenshot" />
              </div>
              <div className={style.portfolio__card_body}>
                <h5>{projectsJSON.project}</h5>
                <div className={style.card_btns}>
                  <a
                    href={projectsJSON.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className={style.card_btn}>GitHub</button>
                  </a>
                  <a
                    href={projectsJSON.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className={style.card_btn}>Website</button>
                  </a>
                </div>
              </div>
            </div> */
