import style from "./skills.module.css";
import css from "./../../assets/icons/css.svg";
import html from "./../../assets/icons/html.svg";
import sass from "./../../assets/icons/sass.svg";
import jest from "./../../assets/icons/jest.png";
import react from "./../../assets/icons/react.svg";
import figma from "./../../assets/icons/figma.svg";
import docker from "./../../assets/icons/docker.svg";
import nodejs from "./../../assets/icons/nodejs.svg";
import mui from "./../../assets/icons/material-ui.svg";
import github from "./../../assets/icons/github-1.svg";
import angular from "./../../assets/icons/angular.svg";
import mongodb from "./../../assets/icons/mongodb.svg";
import firebase from "./../../assets/icons/firebase.svg";
import portuguese from "./../../assets/icons/brazil.svg";
import bootstrap from "./../../assets/icons/bootstrap.svg";
import javascript from "./../../assets/icons/javascript.svg";
import typescript from "./../../assets/icons/typescript.svg";
import reactNative from "./../../assets/icons/react-native.svg";
import redux from "./../../assets/icons/redux.svg"
import vue from "./../../assets/icons/vue.svg"

export function Skills() {
  return (
    <article id="skills" className={style.skills_container}>
      <div className={style.skills__title}>
        <h2>
          <span>&#62;</span>skills
        </h2>
      </div>
      <div className={style.skills__skills}>
        <div className={style.skills__using}>
          <h3>using now:</h3>
          <div className={style.skills__icons}>
            <div>
              <img src={html} alt="html icon in orange color" />
              <p>html5</p>
            </div>
            <div>
              <img src={css} alt="css icon in blue color" />
              <p>css3</p>
            </div>
            <div>
              <img src={javascript} alt="javascript icon in yellow color" />
              <p>javascript</p>
            </div>
            <div>
              <img src={react} alt="react icon in light blue color" />
              <p>react</p>
            </div>
            <div>
              <img src={bootstrap} alt="bootstrap icon in purple color" />
              <p>bootstrap</p>
            </div>
            <div>
              <img src={mui} alt="material ui icon in blue color" />
              <p>material ui</p>
            </div>
            <div>
              <img src={figma} alt="figma icon" />
              <p>figma</p>
            </div>
            <div>
              <img src={github} alt="github icon in black color" />
              <p>github</p>
            </div>
          </div>
        </div>
        <div className={style.skills__learning}>
          <h3>interests:</h3>
          <div className={style.skills__icons}>
            <div>
              <img src={sass} alt="sass icon in pink color" />
              <p>sass</p>
            </div>
            <div>
              <img src={typescript} alt="typescript icon in pink color" />
              <p>typescript</p>
            </div>
            <div>
              <img src={reactNative} alt="react native icon in blue color" />
              <p>native</p>
            </div>
            <div>
              <img src={jest} alt="jest icon in marron color" />
              <p>jest</p>
            </div>
            <div>
              <img src={firebase} alt="firebase icon in yellow color" />
              <p>firebase</p>
            </div>
            <div>
              <img src={docker} alt="docker icon in blue color" />
              <p>docker</p>
            </div>
            <div>
              <img src={angular} alt="angular icon in red color" />
              <p>angular</p>
            </div>
            <div>
              <img src={redux} alt="redux icon in purple color" />
              <p>redux</p>
            </div>
            <div>
              <img src={vue} alt="vue icon in blue and green" />
              <p>vue</p>
            </div>
          </div>
        </div>
        <div className={style.skills__other}>
          <h3>other skills:</h3>
          <div className={style.skills__icons}>
            <div>
              <img src={nodejs} alt="node js icon in green color" />
              <p>nodejs</p>
            </div>
            <div>
              <img src={mongodb} alt="mongo db icon in green color" />
              <p>mongodb</p>
            </div>
            <div>
              <img
                src={portuguese}
                alt="brazil flag"
                className={style.skills__icon_circled}
              />
              <p>portuguese</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
