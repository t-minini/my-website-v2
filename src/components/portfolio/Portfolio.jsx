import style from './portfolio.module.css';
import projectsJSON from './../../portfolio.json';

export function Portfolio() {
  return (
    <article id="portfolio" className={style.portfolio_container}>
      <div className={style.portfolio__title}>
        <h2>
          <span>&#62;</span>projects
        </h2>
      </div>
      <div className={style.portfolio__flex}>
        {projectsJSON.reverse().map((projectsJSON) => {
          return (
            <div key={projectsJSON.id} className={style.portfolio__card}>
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
