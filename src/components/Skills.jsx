import "../css/Skills.scss";
import figma from "../assets/skill_icons/figma.png";
import react from "../assets/skill_icons/react.png";
import css from "../assets/skill_icons/css.png";
import sass from "../assets/skill_icons/sass.png";
import javascript from "../assets/skill_icons/javascript.png";
import typescript from "../assets/skill_icons/typescript.png";
import nodejs from "../assets/skill_icons/nodejs.png";
import kotlin from "../assets/skill_icons/kotlin.png";
import mongodb from "../assets/skill_icons/mongodb.png";
import git from "../assets/skill_icons/git.png";
import html from "../assets/skill_icons/html.png";
import java from "../assets/skill_icons/java.png";
import photoshop from "../assets/skill_icons/adobe-photoshop.png";
import indesign from "../assets/skill_icons/adobe-indesign.png";
import cloud from "../assets/skill_icons/adobe-creative-cloud.png";

const Skills = () => {
  return (
    <section className="skills__section">
      <div className="bottomBlur2"></div>
      <h2 className="about__title">
        {"<"} My skills{"/>"}
      </h2>
      <h3 className="about__subtitle">
        {"{"}Technologies{"};"}
      </h3>

      <div className="skills__container">
        <h1 className="skills__title">
          {"<"}
          <span>Front</span>end technologies{"/>"}
        </h1>
        <div className="skills__technologies">
          <div className="skills__icons">
            <img src={html} alt="html" />
          </div>
          <div className="skills__icons">
            <img src={css} alt="css" />
          </div>
          <div className="skills__icons">
            <img src={sass} alt="sass" />
          </div>
          <div className="skills__icons">
            <img src={react} alt="react" />
          </div>
          <div className="skills__icons">
            <img src={typescript} alt="typescript" />
          </div>
          <div className="skills__icons">
            <img src={javascript} alt="javascript" />
          </div>
        </div>
      </div>

      <div className="skills__container">
        <h1 className="skills__title">
          {"{"}
          <span>Back</span>end technologies{"};"}
        </h1>
        <div className="skills__technologies">
          <div className="skills__icons">
            <img src={java} alt="java" />
          </div>
          <div className="skills__icons">
            <img src={kotlin} alt="kotlin" />
          </div>
          <div className="skills__icons">
            <img src={nodejs} alt="nodejs" />
          </div>
          <div className="skills__icons">
            <img src={mongodb} alt="mongodb" />
          </div>
          <div className="skills__icons">
            <img src={git} alt="git" />
          </div>
        </div>
      </div>

      <div className="skills__container">
        <h1 className="skills__title">
          <span>Web</span>Design technologies{" "}
          <i className="uil uil-edit-alt"></i>
        </h1>
        <div className="skills__technologies">
          <div className="skills__icons">
            <img src={cloud} alt="cloud" />
          </div>
          <div className="skills__icons">
            <img src={photoshop} alt="photoshop" />
          </div>
          <div className="skills__icons">
            <img src={indesign} alt="indesign" />
          </div>
          <div className="skills__icons">
            <img src={figma} alt="figma" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
