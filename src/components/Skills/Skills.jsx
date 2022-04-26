import React from "react";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <div id="skills-section" className={styles.skillsBox}>
      <h2>SKILLS</h2>
      <section className={styles.sectionSkill}>
        <div>
          <span>
            <img src="/img/html.png" alt="html logo" />
            HTML
          </span>
        </div>
        <div>
          <span>
            <img src="/img/css.png" alt="" />
            CSS
          </span>
        </div>
        <div>
          <span>
            <img src="/img/sass.png" alt="sass logo" />
            SCSS
          </span>
        </div>
        <div>
          <span>
            <img src="/img/javascript.png" alt="javascript logo" />
            JAVASCRIPT
          </span>
        </div>
        <div>
          <span>
            <img src="/img/react.png" alt="react logo" />
            REACT
          </span>
        </div>
        <div>
          <span>
            <img src="/img/github.png" alt="github logo" />
            GITHUB
          </span>
        </div>
      </section>
    </div>
  );
}
